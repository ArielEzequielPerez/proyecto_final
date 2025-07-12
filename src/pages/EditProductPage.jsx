import { useParams } from 'react-router-dom';
import ProductEdit from '../component/ProductEdit';
export default function EditProductPage() {
    const { id } = useParams();
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <ProductEdit id={id}/>
      </div>
    </div>
  )
}
