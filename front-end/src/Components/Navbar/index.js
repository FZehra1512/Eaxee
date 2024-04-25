import React from 'react'
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <a href='/' className={styles.logoName}>eaxee</a>
      </div>

      {/* Horizontal nav links */}
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/" className={styles.navLink}>About</a>
        <a href="/" className={styles.navLink}>Services</a>
        <a href="/" className={styles.navLink}>Contact</a>
      </div>

      {/* Button */}
      <button className={styles.button}>Request a Demo</button>
    </nav>


    // <nav className="bg-black py-24 px-8 flex flex-row justify-between items-center">
    //   <div className="flex items-center space-x-2">
    //     <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
    //     <span className="text-white text-lg font-semibold">Your Website Name</span>
    //   </div>

    //   {/* Horizontal nav links */}
    //   <div className="flex space-x-4">
    //     <a href="/" className="text-white hover:text-gray-300">Home</a>
    //     <a href="/" className="text-white hover:text-gray-300">About</a>
    //     <a href="#" className="text-white hover:text-gray-300">Services</a>
    //     <a href="#" className="text-white hover:text-gray-300">Contact</a>
    //   </div>

    //   {/* Button */}
    //   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Request a Demo</button>
    // </nav>
  )
}

export default Navbar