import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/useCart";
import styled from "styled-components";

const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;
const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function CardComponent({ product }) {
  const { addToCart } = useCart();
  const { id, title, price, images, description } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card-container">
      <StyledCard style={{ cursor: "pointer" }}>
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
            <Description>{ description }</Description>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center gap-3">
          <Card.Text className="mb-0 d-flex align-items-center font-weight-bold font-size-24">
            <strong>${price}</strong>
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Footer>
      </StyledCard>
    </div>
  );
}
