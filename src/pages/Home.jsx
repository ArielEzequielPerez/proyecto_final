import Card from "../component/CardComponent";
import Filter from "../component/Filter";
import SpinnerComponent from "../component/SpinnerComponent";
import { useCart } from "../context/useCart";
import { useState } from "react";
import { filterProducts, sortProducts } from "../helpers/helper";


export default function Home() {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  const filtered = filterProducts(products, searchTerm, selectedCategory);
  const filteredProducts = sortProducts(filtered, selectedOrder);
  
  return (
    <div className="container">
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      {filteredProducts.length === 0 ? (
        <SpinnerComponent />
      ) : (
        <div className="grid-products">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
