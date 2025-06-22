import Navbar from "./component/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/routes";
import useCart from "./hooks/useCart";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const cartData = useCart();

  return (
    <Router>
      <AuthProvider>
        <div className="container-app">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              {AppRoutes(cartData).map(({ path, Component, props }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={<Component {...props} />}
                />
              ))}
            </Routes>
          </main>

          <footer className="bg-dark text-white py-3">
            <Footer />
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
