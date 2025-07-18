import { useCart } from "../context/useCart";
import { useEffect } from "react";
import SpinnerComponent from "./SpinnerComponent";
import { useForm } from "react-hook-form";

export default function ProductEdit({ id }) {
  const { categories, findProduct, updateProductContext } = useCart();
  const product = findProduct(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const imagenURL = watch("images");

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        description: product.description,
        price: product.price,
        categoryId: product.category.id,
        images: product.images.join(", "),
      });
    }
    
  }, [product, reset]);

  if (!product) return <SpinnerComponent />;

  const onSubmit = async (data) => {
    const productData = {
      title: data.title,
      price: Number(data.price),
      description: data.description,
      images: data.images.split(",").map((url) => url.trim()),
      categoryId:data.categoryId,
    };

    console.log(productData.categoryId);
    
    await updateProductContext(id, productData);
  };

  return (
    <div className="container bg-light p-4 mt-4 mb-4 rounded">
      <h1 className="text-center m-3">Editar {product.title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Título</label>
          <input
            className="form-control"
            {...register("title", { required: "El título es obligatorio" })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            className="form-control"
            {...register("price", {
              required: "El precio es obligatorio",
              min: { value: 1, message: "Debe ser mayor a 0(Cero)" },
            })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            rows={4}
            {...register("description", {
              required: "La descripción es obligatoria",
            })}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Categoría</label>
          <select
            className="form-control"
            {...register("categoryId", {
              required: "La categoría es obligatoria",
            })}
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span className="text-danger">{errors.categoryId.message}</span>
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
                .filter((url) => url) // elimina strings vacíos
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

        <div className="container-btn mt-4">
          <div className="d-flex justify-content-center align-items-center ">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
