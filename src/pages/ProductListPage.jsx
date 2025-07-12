import ProductCart from "../component/ProductCard";
import SpinnerComponent from "../component/SpinnerComponent";
import { useCart } from "../context/useCart";

export default function ProductList() {
  const { products } = useCart();

  return (
    <div className="container py-3 card-product">
      {
        products.length === 0?(
          <SpinnerComponent />
        ) : (
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        )
      }
    </div>
  );
}