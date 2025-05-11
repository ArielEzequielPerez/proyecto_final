import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";

export default function CardComponent({ product }) {
  const { title, price, images, description } = product;

  return (
    <div className="card-container">
      <Card className="sizeImage" style={{ width: "18rem" }}>
        <Carousel>
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
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>${price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
