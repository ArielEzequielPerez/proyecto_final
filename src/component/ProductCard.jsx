import React from "react";
import styled from "styled-components";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
  margin: 1rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .card-img {
    object-fit: cover;
    height: 200px; /* Ajustá el valor a lo que prefieras */
    width: 100%;
    border-radius: 0.25rem;
  }
`;

export default function ProductCart({ product }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/edit/${id}`);
  };
  
  return (
    <div>
      <StyledCard
        className="shadow"
        key={product.id}
        onClick={() => handleCardClick(product.id)}
      >
        <Row className="g-0">
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

          <Col md={8}>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ID: {product.id} — Categoría: {product.category?.name}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </StyledCard>
    </div>
  );
}