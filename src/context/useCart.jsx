import { createContext, useContext, useState, useEffect, useMemo } from "react";
import {
  fetchProducts,
  fetchCategories,
  updateProduct,
  deleteProduct,
  addProduct,
} from "../service/productService";
import { toast } from "react-toastify";

import Swal from "sweetalert2";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    let toastMessage = "";

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      let updatedCart;

      if (existing) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        toastMessage = "Cantidad actualizada";
      } else {
        updatedCart = [...prev, { ...product, quantity: 1 }];
        toastMessage = `${product.title} se ha agregado al carrito.`;
      }

      return updatedCart;
    });

    toast.success(toastMessage);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const findProduct = (id) => {
    if (!products || products.length === 0) return null;
    return products.find((product) => product.id === parseInt(id));
  };

  const deleteProductFromContext = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProductContext = async (id, productData) => {
    try {
      const updatedProduct = await updateProduct(id, productData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );

      toast.success("Producto actualizado correctamente");
    } catch (error) {
      toast.error("Error al actualizar el producto");
    }
  };

  const addProductContext = async (productData) => {
    try {
      const newProduct = await addProduct(productData);
      setProducts((prevProducts) => [...prevProducts, newProduct]);

      toast.success("Producto creado exitosamente");
    } catch (error) {
      console.error("Error al crear producto:", error);
      toast.error("Error al crear el producto");
    }
  }

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart")
  };
  
  const purchaseCart = () => {
    Swal.fire({
      icon: "success",
      title: "Gracias por su compra",
      text: "Su pedido ha sido procesado con éxito.",
    });
    clearCart(); // Vacía el carrito después de la compra
  };

  const value = {
    products,
    cart,
    findProduct,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    categories,
    deleteProductFromContext,
    updateProductContext,
    addProductContext,
    total,
    clearCart,
    purchaseCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
