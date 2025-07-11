import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      });

      const { access_token, refresh_token } = res.data;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      setAccessToken(access_token);
      setRefreshToken(refresh_token);

      const profile = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setUser(profile.data);
      localStorage.setItem("user", JSON.stringify(profile.data));

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: `Hola ${profile.data.name}`,
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {      
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Usuario o contraseña incorrectos",
      });
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, accessToken, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext debe usarse dentro de <AuthProvider>");
  return context;
};