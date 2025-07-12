import { useCart } from "../context/useCart";
import SpinnerComponent from "./SpinnerComponent";
import { useForm } from "react-hook-form";

export default function ProductEdit({ id }) {
  const { findProduct } = useCart();
  const product = findProduct(id);

  if (!product) {
    return (
      <div>
        <SpinnerComponent />
      </div>
    );
  }

  const { title, price, images, description } = product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product.title,
      price: product.price,
      images: product.images.join(", "), // convierte array a string
      description: product.description,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          {...register("title", { required: "El título es obligatorio" })}
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
        />
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="price">Precio</label>
        <input
          id="price"
          type="number"
          step="0.01"
          {...register("price", {
            required: "El precio es obligatorio",
            min: { value: 0, message: "Debe ser un valor positivo" },
          })}
          className={`form-control ${errors.price ? "is-invalid" : ""}`}
        />
        {errors.price && (
          <span className="error-message">{errors.price.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="images">Imágenes (URLs separadas por comas)</label>
        <input
          id="images"
          {...register("images", {
            required: "Las imágenes son obligatorias",
          })}
          className={`form-control ${errors.images ? "is-invalid" : ""}`}
        />
        {errors.images && (
          <span className="error-message">{errors.images.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          rows={4}
          {...register("description", {
            required: "La descripción es obligatoria",
          })}
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
        ></textarea>
        {errors.description && (
          <span className="error-message">{errors.description.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Guardar Cambios
      </button>
    </form>
  );
}
