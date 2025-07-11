import Navbar from "./component/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/useCart";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="container-app">
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                {AppRoutes().map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
              </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
