import useCart from "../hooks/useCart";
import Card from "../component/CardComponent";
export default function Home() {
  const { products } = useCart();

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="grid-products">
        {products.map((product) => (
          <div key={product.id}>
          <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
