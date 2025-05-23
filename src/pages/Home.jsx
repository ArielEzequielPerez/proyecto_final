import Card from "../component/CardComponent";
import SpinnerComponent from "../component/SpinnerComponent";

export default function Home({ products, addToCart }) {
  return (
    <div className="container">
      {products.length === 0 ? (
        <SpinnerComponent />
      ) : (
        <div className="grid-products">
          {products.map((product) => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
