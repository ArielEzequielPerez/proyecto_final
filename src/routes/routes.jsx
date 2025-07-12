import Cart from "../component/Cart";
import Home from "../pages/Home";
import Login from "../pages/LoginPage";
import ProductDetail from "../pages/ProductDetailPage";
import AddProduct from "../pages/AddProductPage";
import PrivateRoute from "../component/PrivateRoute";
import RegisterPage from "../pages/RegisterPage";
import EditProduct from "../pages/EditProductPage";
import Products from "../pages/ProductListPage";

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
    path:"/register",
    Component: RegisterPage
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
  {
    path: "/edit/:id",
    Component: () => (
      <PrivateRoute>
        <EditProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/products",
    Component: () => (
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    ),
  },
];

export default AppRoutes;
