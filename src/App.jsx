import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/routes'
function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {AppRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}

          </Routes>
        </div>
      </Router>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
