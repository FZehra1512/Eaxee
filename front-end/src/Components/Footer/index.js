import React from 'react'
import styles from './footer.module.css'
import { MdEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    // TODO:Add actual trademark and social links on icons
    // TODO: Should Change Mobile View, currently its not looking good
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <p>Trademark</p>
        <div className={styles.socialLinks}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinBoxFill />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQShgWhZmn1BiKC0wr5pS3Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiYoutubeFill />
          </a>
          {/* <a href="/" target="_blank" rel="noopener noreferrer">
            <RiFacebookBoxFill />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer
