import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<h1>ahsdjk</h1>} />
      {/* <Route path="/Auth" element={<Auth />} /> */}
    </Routes>
  );
};

export default AllRoutes;
