import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function CardComponent({ product, addToCart }) {
  const { id, title, price, images, description } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };
  const MAXLEGTH = 200;

  const truncateText = (text) => {
    if (text.length > MAXLEGTH) {
      return text.substring(0, MAXLEGTH) + "...";
    }
    return text;
  };

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="card-container">
      <Card style={{ cursor: "pointer" }}>
        <Carousel onClick={handleCardClick}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body onClick={handleCardClick}>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-description">
            {truncateText(description)}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center gap-3">
          <Card.Text className="mb-0 d-flex align-items-center font-weight-bold font-size-24">
            <strong>${price}</strong>
          </Card.Text>
          <Button variant="secondary" onClick={handleCardClick}>
            Ver detalles
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
