import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import CardComponent from "./CardComponent";
export default function Product({ product, addToCart, products }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  const productsSameCategory = products.filter(
    (aProduct) =>
      aProduct.category.name === product.category.name &&
      aProduct.id !== product.id
  );

  const groupedProducts = [];
  for (let index = 0; index < productsSameCategory.length; index += 3) {
    groupedProducts.push(productsSameCategory.slice(index, index + 3));
  }

  return (
    <div>
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
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </div>
      </div>

      {groupedProducts.length > 0 ? (
        <>
          <h2 className="text-center mt-5">Productos relacionados</h2>
          <Carousel className="mt-3">
            {groupedProducts.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center gap-3">
                  {group.map((relatedProduct) => (
                    <CardComponent
                      key={relatedProduct.id}
                      product={relatedProduct}
                      addToCart={addToCart}
                    />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      ) : (
        <p className="text-center mt-3">No hay productos relacionados.</p>
      )}
    </div>
  );
}
