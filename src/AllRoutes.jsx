import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import OrderSummary from "./pages/Summary";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Cart />} />
      <Route path="/order-summary" element={<OrderSummary />} />
    </Routes>
  );
};

export default AllRoutes;
