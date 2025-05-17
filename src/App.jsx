import Navbar from "./component/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/routes";
import useCart from "./hooks/useCart";
function App() {
  const cartData = useCart();

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {AppRoutes(cartData).map(({ path, Component, props }, index) => (
              <Route
                key={index}
                path={path}
                element={<Component {...props} />}
              />
            ))}
          </Routes>
        </div>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
