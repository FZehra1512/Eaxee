import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import RequestDemo from "../Pages/RequestDemo";
import Contact from '../Pages/Contact';
import Resources from "../Pages/Resources";
import Error from "../Pages/Error"

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requestDemo" element={<RequestDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
