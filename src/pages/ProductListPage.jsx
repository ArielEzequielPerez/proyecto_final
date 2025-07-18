import ProductCart from "../component/ProductCard";
import SpinnerComponent from "../component/SpinnerComponent";
import { useCart } from "../context/useCart";

export default function ProductList() {
  const { products } = useCart();

  return (
    <div className="container card-product">
      <div className="card mb-4 d-flex flex-row"></div>
      {products.length === 0 ? (
        <SpinnerComponent />
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <ProductCart product={product} />
          </div>
        ))
      )}
    </div>
  );
}
