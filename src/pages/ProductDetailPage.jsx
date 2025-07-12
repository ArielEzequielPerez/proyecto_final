import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerComponent from "../component/SpinnerComponent";
import Product from "../component/Product";
import { useCart } from "../context/useCart";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products, addToCart } = useCart()

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id, products]);

  const sameCategry = products.filter(
    (item) =>
      item.category.name === product?.category.name && item.id !== product?.id
  );//cambiar

  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        {product ? (
          <Product product={product} addToCart={addToCart} products={sameCategry} />
        ) : (
          <SpinnerComponent />
        )}
      </div>
    </>
  );
}
