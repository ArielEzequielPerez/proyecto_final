import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://api.escuelajs.co/api/v1/users/", {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar:
          data.avatar || "https://api.lorem.space/image/face?w=640&h=480&r=867",
      });

      Swal.fire({
        icon: "success",
        title: "Cuenta creada",
        text: "¡Ahora podés iniciar sesión!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la cuenta. ¿Ya existe ese email?",
      });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Crear cuenta</h2>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
            })}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="avatar">Avatar (URL)</label>
          <input
            id="avatar"
            type="url"
            placeholder="Opcional"
            {...register("avatar")}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 w-100 rounded-6">
          <Link as={Link} to="/login" className="btn btn-primary">
            {" "}
            Iniciar Sesión{" "}
          </Link>
        </div>

      </form>
    </div>
  );
}
