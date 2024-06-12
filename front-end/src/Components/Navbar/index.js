import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import '../../../../front-end/src/App.css';
import logoImage from '../../Assets/eaxeeLogo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";



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
    const linkClassName = "nav__link para";
    const liClassName = isMobile ? "mobileNavLinks" : "";
    return (

      <div className={listClassName}>
        <ul>
          <li className={liClassName}>
            <NavLink to="/#Home" className={linkClassName } onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className={liClassName}>
            <NavLink
              to="/#about"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className={liClassName}>
            <NavLink
              to="/#resourceSection"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Resources
            </NavLink>
          </li>
          <li className={liClassName}>
            <NavLink
              to="/contact"
              className={linkClassName}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/requestDemo"
          style={{ color: "#fff" }}
          id="mobileNavButton"
        >
          <button className="button para">Request a Demo</button>
        </NavLink>
      </div>
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="logoContainer">
          <img src={logoImage} alt="Logo" className="logo" />
          {/* <p className="logoName">eaxee</p> */}
        </NavLink>

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

        {/* Button for devices other than mobile*/}
        <NavLink to="/requestDemo" style={{ color: "#fff" }} id="navButton">
          <button className="button para">Request a Demo</button>
        </NavLink>

      </nav>
    </header>
  );
}

export default Navbar
