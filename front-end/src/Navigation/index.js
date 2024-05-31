import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import RequestDemo from "../Pages/RequestDemo";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Blog from "../Pages/Resources/Blogs/Blog";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event from "../Pages/Resources/Events/Event";
import Whitepaper from "../Pages/Resources/Whitepaper/Whitepaper";
import Documentation from "../Pages/Resources/Documentation/Documentation";
import ScrollToTop from "../Components/ScrollToTop";

const MainRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/requestDemo"];

  const isErrorPage =
    location.pathname !== "/" &&
    !hideNavbarRoutes.includes(location.pathname) &&
    !["/contact", "/blog", "/events", "/whitepaper", "/documentation"].includes(
      location.pathname
    ) &&
    !location.pathname.startsWith("/resources");

  return (
    <>
      <ScrollToTop />
      {!hideNavbarRoutes.includes(location.pathname) && !isErrorPage && (
        <Navbar />
      )}
      <div className="content-wrap">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/requestDemo" element={<RequestDemo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Event />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      {!isErrorPage && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

export default AppWrapper;

