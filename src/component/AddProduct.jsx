import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function AddProductForm({ category }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          slug: data.title.toLowerCase(),
          price: parseFloat(data.price),
          description: data.description,
          category: {
            id: parseInt(data.categoryId),
          },
          images: data.images.split(",").map((url) => url.trim()),
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Producto agregado",
          text: "El producto se ha agregado correctamente.",
        });
      } else {
        throw new Error("Error al agregar el producto");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <div className="container bg-light p-4 mt-4 mb-4 rounded">
      <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
        <h2>Agregar Producto</h2>

        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
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
              min: { value: 0, message: "El precio debe ser mayor a 0" },
            })}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
          />
          {errors.price && (
            <span className="error-message">{errors.price.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            {...register("description", {
              required: "La descripción es obligatoria",
            })}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
          ></textarea>
          {errors.description && (
            <span className="error-message">{errors.description.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="categoryId">Categoría</label>
          <select
            id="categoryId"
            {...register("categoryId", {
              required: "La categoría es obligatoria",
            })}
            className={`form-control ${errors.categoryId ? "is-invalid" : ""}`}
          >
            <option value="">Selecciona una categoría</option>
            {category.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span className="error-message">{errors.categoryId.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="images">Imágenes (URLs separadas por comas)</label>
          <input
            id="images"
            type="text"
            {...register("images", {
              required: "Las imágenes son obligatorias",
            })}
            className={`form-control ${errors.images ? "is-invalid" : ""}`}
          />
          {errors.images && (
            <span className="error-message">{errors.images.message}</span>
          )}
        </div>

        <div className="container-btn">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
