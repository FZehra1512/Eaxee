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
import BlogPage from "../Pages/Resources/Blogs/blogPage";
import Video from "../Pages/Resources/Videos/Video";

const MainRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/requestDemo"];

  const isErrorPage =
    location.pathname !== "/" &&
    !hideNavbarRoutes.includes(location.pathname) &&
    ![
      "/contact",
      "/blog",
      "/events",
      "/whitepaper",
      "/documentation",
      "/videos"
    ].includes(location.pathname) &&
    !location.pathname.startsWith("/blog/");

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
          <Route path="/videos" element={<Video />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route
            path="*"
            element={<Error text="No such page exists on eaxee.com" />}
          />
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

