import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FactsPage from "../pages/FactsPage";
import ItemPage from "../pages/ItemPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heroes" element={<FactsPage />} />
      <Route path="/items" element={<ItemPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
