import App from "@/App";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductDetails from "@/pages/ProductDetails";
import MyOrders from "@/pages/user/MyOrders";
import Profile from "@/pages/user/Profile";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: Checkout,
        path: "/checkout",
      },
      {
        Component: ProductDetails,
        path: "/product-details",
      },
      {
        Component: Profile,
        path: "/me",
      },
      {
        Component: MyOrders,
        path: "/me/orders",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },

  {
    Component: Verify,
    path: "/verify",
  },
]);
