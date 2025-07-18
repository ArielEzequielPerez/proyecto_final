import { useCart } from "../context/useCart";
import { orderByOptions } from "../helpers/helper";

export default function Filter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedOrder,
  setSelectedOrder,
}) {
  const { categories } = useCart();

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center mt-4 mb-4 gap-3">
      <input
        type="text"
        className="form-control"
        style={{ maxWidth: "400px" }}
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="w-100">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <select
        className="form-select w-100"
        value={selectedOrder}
        onChange={(e) => setSelectedOrder(e.target.value)}
      >
        <option value="">Seleccionar orden</option>
        {Object.entries(orderByOptions).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
