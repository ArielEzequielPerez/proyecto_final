import Card from "../component/CardComponent";
import SpinnerComponent from "../component/SpinnerComponent";

export default function Home({ products, addToCart }) {
  return (
    <div className="container">
      <h1>Product List</h1>
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
