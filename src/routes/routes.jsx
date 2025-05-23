import Cart from "../component/Cart";
import Home from "../pages/Home";
import login from "../pages/Login";
import ProductDetail from "../pages/Product";

const AppRoutes = (cartData) => [
  {
    path: "/",
    Component: Home,
    props: { products: cartData.products, addToCart: cartData.addToCart },
  },

  { path: "/login", Component: login, props: {} },

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
];

export default AppRoutes;
