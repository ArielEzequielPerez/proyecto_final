import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();
const EMAIL = "test@test.com";
const PASSWORD = "1234";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === EMAIL && password === PASSWORD) {
      const token = `fake-token-${email}`;
      localStorage.setItem("authToken", token);
      setUser({ email });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Usuario o contraseña incorrectos",
      });
      setUser(null);
      localStorage.removeItem("authToken");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);