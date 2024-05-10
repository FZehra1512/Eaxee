import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import './navbar.css';
import logoImage from '../../Assets/eaxee x blue.png';
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
            to="/resources"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Resources
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logoContainer">
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
        <button className="button">Request a Demo</button>

        {/* Menu button for mobile
        <button className={menuButton} onClick={toggleMenu}>
          <IoMenu />
        </button> */}
      </nav>
    </header>
  );
}

export default Navbar


        // {
        //   /* Menu slider for mobile */
        // }
        // {
        //   /* {showMenu && (
        //   <div className={menuSlider}>
        //     <Link to="/" className={navLink}>
        //       Home
        //     </Link>
        //     <Link to="/aboutUs" className={navLink}>
        //       About Us
        //     </Link>
        //     <Link to="/contact" className={navLink}>
        //       Contact
        //     </Link>
        //     <Link to="/resources" className={navLink}>
        //       Resources
        //     </Link>
        //   </div>
        // )} */
        // }


        // {
        //   /* nav links */
        // }
        // <div
        //   className={`nav__menu ${showMenu ? "show-menu" : ""}`}
        //   id="nav-menu"
        // >
        //   {/* <Link to="/" className={navLink}>
        //     Home
        //   </Link>
        //   <Link to="/aboutUs" className={navLink}>
        //     About Us
        //   </Link>
        //   <Link to="/contact" className={navLink}>
        //     Contact
        //   </Link>
        //   <Link to="/resources" className={navLink}>
        //     Resources
        //   </Link> */}

        //   <div className="nav__close" id="nav-close" onClick={toggleMenu}>
        //     <IoClose />
        //   </div>
        // </div>;