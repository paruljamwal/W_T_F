import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Fitness from "../Pages/Fitness";
import Gyms from "../Pages/Gyms";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Nutrition from "../Pages/Nutrition";
import Partner from "../Pages/Partner";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
