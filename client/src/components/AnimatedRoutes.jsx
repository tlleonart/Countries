import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Add from "../pages/add/Add";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Landing from "../pages/landing/Landing";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
