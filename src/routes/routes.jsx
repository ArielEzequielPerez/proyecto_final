import Cart from "../component/Cart";
import Home from "../pages/Home";
import Login from "../pages/LoginPage";
import ProductDetail from "../pages/ProductDetail";
import AddProduct from "../pages/AddProductPage";
import PrivateRoute from "../component/PrivateRoute";

const AppRoutes = (cartData) => [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/new",
    Component: () => (
      <PrivateRoute>
        <AddProduct />
      </PrivateRoute>
    ),
  },
];

export default AppRoutes;
