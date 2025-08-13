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
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/analytics"}></Navigate>,
      },
      ...generateRoutes(adminSidebarItems),
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
