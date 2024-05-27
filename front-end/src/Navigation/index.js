import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import RequestDemo from "../Pages/RequestDemo";
import Contact from '../Pages/Contact';
import Resources from "../Pages/Resources";
import Error from "../Pages/Error"
import Blog from "../Pages/Resources/Blogs/Blog";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event from "../Pages/Resources/Events/Event";

const MainRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/requestDemo'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requestDemo" element={<RequestDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Event />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

export default App;
