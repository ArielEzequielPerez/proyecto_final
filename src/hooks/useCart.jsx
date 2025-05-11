import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../service/productService";

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
        setCart((prevCart) => [...prevCart, product]);
    };
    
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    
    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => total + item.price, 0);
    }, [cart]);
    
    return { products, cart, addToCart, removeFromCart, totalPrice };
}