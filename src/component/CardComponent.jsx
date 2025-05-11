import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

export default function CardComponent({ product }) {
  const {id, title, price, images, description } = product;

  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card-container">
      <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
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
          <Card.Text className='card-description'>{description}</Card.Text>
          <Card.Text>
            <strong>${price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
