import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import './navbar.css';
import logoImage from '../../Assets/eaxee x blue.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";



// TODO: Navbar ka size, plus font-size mobile pr change krna hai, make it a little bit small
// TODO: Mobile navigation Sidebar ki stylings krni hain
// TODO: Should i add request demo button in Mobile nav sidebar? Confirm from Sir Ghazanfar
// TODO: Ubaid ne dropdown ka kaha hai, confirm from sir Ghazanfar, should i remove about link from navbar links, and add subbar or dropdown to the home nav link for about, meet team and resource section 
// TODO: Change Link hover effects, need better effects.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Resources-Blog
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logoContainer">
          {/* TODO: Eaxee k logo pr bhi link dena hai ya sirf eaxee text pr,
          currently sirf text aik link hai */}
          <img src={logoImage} alt="Logo" className="logo" />
          <NavLink to="/" className="logoName">
            eaxee
          </NavLink>
        </div>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu ${isMenuOpen ? "nav__menu_active" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}

        {/* Button */}

        <button className="button" id="navButton">
          <NavLink to="/requestDemo" style={{ color: "#fff" }}>
            Request a Demo
          </NavLink>
        </button>

        {/* Menu button for mobile
        <button className={menuButton} onClick={toggleMenu}>
          <IoMenu />
        </button> */}
      </nav>
    </header>
  );
}

export default Navbar
