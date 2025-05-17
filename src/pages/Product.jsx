import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../service/productService';
import SpinnerComponent from '../component/SpinnerComponent';

export default function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);


  return (

    <div className="container d-flex flex-column min-vh-100">
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.images[0]} alt={product.title} style={{ width: '300px' }} />
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </div>
  );
}