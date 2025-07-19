import React from "react";
import styled from "styled-components";
import { Carousel, Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled(Card)`
  margin: 1rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .card-img {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border-radius: 0.25rem;
  }
  .size-icon {
    font-size: 30px;
  }
`;

export default function ProductCart({ product }) {
  const navigate = useNavigate();

  const { deleteProductFromContext } = useCart();

  const handleCardClick = (e) => {
    if (e.target.closest(".delete-button")) return;
    navigate(`/edit/${product.id}`);
  };

  return (
    <StyledCard className="shadow">
      <Row className="g-0 align-items-stretch">
        <Col md={4}>
          <Carousel interval={null}>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="d-block w-100"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={7}>
          <Card.Body onClick={handleCardClick}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ID: {product.id} — Categoría: {product.category?.name}
            </Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Col>

        <Col
          md={1}
          className="d-flex justify-content-center align-items-center"
        >
          <Button
            variant="outline-danger"
            size="sm"
            className="delete-button"
            onClick={() => deleteProductFromContext(product.id)}
            title="Eliminar producto"
          >
            <FontAwesomeIcon icon={faTrash} className="size-icon" />
          </Button>
        </Col>
      </Row>
    </StyledCard>
  );
}
