import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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
