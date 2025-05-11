import useCart from "../hooks/useCart";
import Card from "../component/CardComponent";
import Spinner from 'react-bootstrap/Spinner';

export default function Home() {
  const { products } = useCart();

  return (
    <div className="container">
      <h1>Product List</h1>
      {products.length === 0 ? (
        <div className="constainer center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      ) : (
        <div className="grid-products">
          {products.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}