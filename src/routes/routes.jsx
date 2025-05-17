import Cart from '../component/Cart';
import Home from '../pages/Home';
import About from '../pages/Login';
import ProductDetail from '../pages/Product';

const AppRoutes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/product/:id', Component: ProductDetail },
  { path: '/cart', Component: Cart },
  
];

export default AppRoutes;