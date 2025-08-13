import Analytics from "@/pages/admin/Analytics";
import Gallery from "@/pages/admin/Gallery";
import Orders from "@/pages/admin/Orders";
import Products from "@/pages/admin/Products";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Products",
        url: "/admin/products",
        component: Products,
      },
      {
        title: "Orders",
        url: "/admin/orders",
        component: Orders,
      },
      {
        title: "Gallery",
        url: "/admin/gallery",
        component: Gallery,
      },
    ],
  },
];
