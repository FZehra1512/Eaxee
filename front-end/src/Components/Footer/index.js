import React, { useState } from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const openMail = () => {
    window.location.href = "mailto:info@eaxee.com";
}

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.websiteLinks}>
        <Link to="/#Home" className={`${styles.weblink} para`}>
          Home
        </Link>
        <Link to="/#about" className={`${styles.weblink} para`}>
          About Us
        </Link>
        <Link to="/contact" className={`${styles.weblink} para`}>
          Contact
        </Link>
        <Link to="/requestDemo" className={`${styles.weblink} para`}>
          Request Demo
        </Link>

        <div className={styles.resourcesLinks}>
          <button
            onClick={toggleDropdown}
            className={`${styles.dropdownButton} para`}
          >
            Resources{" "}
            <IoMdArrowDropdown className={styles.dropdownButtonIcon} />
          </button>
          <div
            className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}
          >
            <Link to="/blog" className={`${styles.weblink} para`}>
              - Blogs
            </Link>
            <Link to="/videos" className={`${styles.weblink} para`}>
              - Demo Videos
            </Link>
            <Link to="/whitepaper" className={styles.weblink}>
              - Whitepaper
            </Link>
            {/* <Link to="/documentation" className={styles.weblink}>
              - Documentation
            </Link>
            <Link to="/events" className={styles.weblink}>
              - Events
            </Link> */}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className="para">©{currentYear} Eaxee | All rights reserved</p>
        <div className={styles.socialLinks}>
          <a
            onClick={openMail}
            href="mailto:info@eaxee.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/company/eaxeesoft/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQShgWhZmn1BiKC0wr5pS3Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
