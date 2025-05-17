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
          <Card.Text className="card-description">{description}</Card.Text>
          <Card.Text>
            <strong>${price}</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center gap-2">
          <Button variant="secondary" onClick={handleCardClick}>
            Ver detalles
          </Button>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Agregar al carrito
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}