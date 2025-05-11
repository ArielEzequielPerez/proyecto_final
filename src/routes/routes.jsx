import Home from '../pages/Home';
import About from '../pages/About';
import ProductDetail from '../pages/Product';

const AppRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/product/:id', element: <ProductDetail /> },
];

export default AppRoutes;