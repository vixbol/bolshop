import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Categories from "../pages/admin/metadata/categories/Categories";
import BuyProducts from "../pages/admin/order_management/buy_products/BuyProducts";
import Orders from "../pages/admin/order_management/orders/Orders";
import Products from "../pages/admin/product_management/products/Products";
import ServicePackages from "../pages/admin/product_management/service_packages/ServicePackages";
import CustomerJobs from "../pages/admin/product_management/customer_jobs/CustomerJobs";

const AdminRouter = () => {
  const routers = [
    { path: "/", element: <Dashboard /> },
    { path: "/categories", element: <Categories /> },
    { path: "/buy_products", element: <BuyProducts /> },
    { path: "/orders", element: <Orders /> },
    { path: "/products", element: <Products /> },
    { path: "/service_packages", element: <ServicePackages /> },
    { path: "/customer_jobs", element: <CustomerJobs /> },
  ];

  return (
    <div>
      <Routes>
        {routers.map((r, index) => (
          <Route key={index} path={r.path} element={r.element} />
        ))}
      </Routes>
    </div>
  );
};

export default AdminRouter;
