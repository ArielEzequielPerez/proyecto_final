import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerComponent from "../component/SpinnerComponent";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';


export default function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id, products]);

  const sameCategry = products.filter((item)=> item.category.name === product?.category.name && item.id !== product?.id);
  console.log(sameCategry);
  
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        {product ? (
          <>
            <h1 className="text-center m-3">{product.title}</h1>
            <div className="container-product-detail">
              <div>
                <Carousel>
                  {product.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ height: "500px", objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="">
                <p className="product-description">{product.description}</p>
                <p className="product-price">
                  <strong>Price:</strong> ${product.price}
                </p>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Agregar al carrito
                </Button>
              </div>
              
            </div>
          </>
        ) : (
          <SpinnerComponent />
        )}
      </div>
    </>
  );
}
