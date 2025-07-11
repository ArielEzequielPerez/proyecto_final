import Card from "../component/CardComponent";
import SpinnerComponent from "../component/SpinnerComponent";
import { useCart } from "../context/useCart";

export default function Home() {
  const { products } = useCart()
  return (
    <div className="container">
      {products.length === 0 ? (
        <SpinnerComponent />
      ) : (
        <div className="grid-products">
          {products.map((product) => (
            <Card key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
}
