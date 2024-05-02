import React from 'react'
import {Link} from "react-router-dom";
import styles from './navbar.module.css';
import logoImage from '../../Assets/eaxee x blue.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
        <a href="/" className={styles.logoName}>
          eaxee
        </a>
      </div>

      {/* Horizontal nav links */}
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/aboutUs" className={styles.navLink}>
          About Us
        </Link>
        <Link to="/contact" className={styles.navLink}>
          Contact
        </Link>
        <Link to="/resources" className={styles.navLink}>
          Resources
        </Link>
      </div>

      {/* Button */}
      <button className={styles.button}>Request a Demo</button>
    </nav>
  );
}

export default Navbar