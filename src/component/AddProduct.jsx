import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCart } from "../context/useCart";

export default function AddProductForm() {
  const { categories, addProductContext } = useCart();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const imagenURL = watch("images");

  const onSubmit = async (data) => {
    try {
      const newProduct = {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        categoryId: parseInt(data.categoryId),
        images: data.images.split(",").map((url) => url.trim()),
      };

      await addProductContext(newProduct);

      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        text: "El producto se ha agregado correctamente.",
      });

      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "No se pudo agregar el producto.",
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
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span className="error-message">{errors.categoryId.message}</span>
          )}
        </div>

        <div>
          <label>URL de imagen</label>
          <input
            type="text"
            {...register("images", {
              required: "El enlace de imagen es obligatorio",
              pattern: {
                message: "Debe ser una URL válida de imagen",
              },
            })}
            className="form-control"
            placeholder="https://example.com/imagen.jpg"
          />

          {imagenURL && (
            <div className="mt-3">
              {imagenURL
                .split(",")
                .map((url) => url.trim())
                .filter((url) => url)
                .map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    style={{
                      maxWidth: "100%",
                      maxHeight: 200,
                      marginRight: 10,
                    }}
                  />
                ))}
            </div>
          )}
        </div>

        <div className="container-btn">
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
