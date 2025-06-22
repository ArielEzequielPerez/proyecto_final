import Cart from "../component/Cart";
import Home from "../pages/Home";
import Login from "../pages/LoginPage";
import ProductDetail from "../pages/Product";
import AddProduct from "../pages/AddProductPage";
import PrivateRoute from "../component/PrivateRoute";

const AppRoutes = (cartData) => [
  {
    path: "/",
    Component: Home,
    props: { products: cartData.products, addToCart: cartData.addToCart },
  },
  {
    path: "/login",
    Component: Login,
    props: {},
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
    props: { products: cartData.products, addToCart: cartData.addToCart },
  },
  {
    path: "/cart",
    Component: Cart,
    props: {
      cart: cartData.cart,
      removeFromCart: cartData.removeFromCart,
      incrementQuantity: cartData.incrementQuantity,
      decrementQuantity: cartData.decrementQuantity,
      total: cartData.total,
    },
  },
  {
    path: "/new",
    Component: (props) => (
      <PrivateRoute>
        <AddProduct {...props}/>
      </PrivateRoute>
    ),
    props: { category: cartData.category},
  },
];

export default AppRoutes;