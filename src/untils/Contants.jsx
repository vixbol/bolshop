import { AiFillProduct } from "react-icons/ai";
import { DiDatabase } from "react-icons/di";
import { FaShoppingCart } from "react-icons/fa";

export const LISTMENU = [
  {
    title: "MetaData",
    icon: <DiDatabase />,
    subItem: [
      {
        path: "/categories",
        name: "Categories",
      },
    ],
  },
  {
    title: "Order Management",
    icon: <FaShoppingCart />,
    subItem: [
      {
        path: "/buy_products",
        name: "Buy Products",
      },
      {
        path: "/orders",
        name: "Orders",
      },
    ],
  },
  {
    title: "Product Management",
    icon: <AiFillProduct />,
    subItem: [
      {
        path: "/products",
        name: "Products",
      },
      {
        path: "/service_packages",
        name: "Service Packages",
      },
      {
        path: "/customer_jobs",
        name: "Customer Jobs",
      },
    ],
  },
];
