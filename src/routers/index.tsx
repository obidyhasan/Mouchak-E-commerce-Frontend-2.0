import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductDetails from "@/pages/ProductDetails";
import MyOrders from "@/pages/user/MyOrders";
import Profile from "@/pages/user/Profile";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { Role } from "@/constants/role";
import MyOrderCarts from "@/pages/user/MyOrderCarts";
import OrderDetails from "@/pages/admin/OrderDetails";
import UpdateProduct from "@/pages/admin/UpdateProduct";
import About from "@/pages/About";

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
        Component: About,
        path: "/about",
      },
      {
        Component: Checkout,
        path: "/checkout",
      },
      {
        Component: ProductDetails,
        path: "/product/:slug",
      },
      {
        Component: withAuth(Profile, ...Object.values(Role)),
        path: "/me",
      },
      {
        Component: withAuth(MyOrders, ...Object.values(Role)),
        path: "/me/orders",
      },
      {
        Component: withAuth(MyOrderCarts, ...Object.values(Role)),
        path: "/me/orders/:id",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, Role.ADMIN, Role.SUPER_ADMIN),
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/products"}></Navigate>,
      },

      ...generateRoutes(adminSidebarItems),
      {
        path: "/admin/orders/:id",
        Component: OrderDetails,
      },
      {
        path: "/admin/products/:slug",
        Component: UpdateProduct,
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
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
