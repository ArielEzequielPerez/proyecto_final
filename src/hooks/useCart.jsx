import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../service/productService";
import Swal from "sweetalert2";
export default function useCart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      Swal.fire({
        position: "top-end",
        title: "Producto agregado",
        text: `${product.title} se ha agregado al carrito.`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      return [...prevCart, { ...product, quantity: 1 }];
    });
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

  const category = [
    ...new Map(
      products?.map((product) => [product.category.id, product.category])
    ).values(),
  ];

  return {
    products,
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    category,
    total,
  };
}
