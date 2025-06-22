import React from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "El correo electrónico es obligatorio" })}
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
            {...register("password", { required: "La contraseña es obligatoria" })}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}