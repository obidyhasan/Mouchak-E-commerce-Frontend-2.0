import App from "@/App";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
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
