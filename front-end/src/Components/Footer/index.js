import React from 'react'
import styles from './footer.module.css'
import { MdEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Trademark</p>
      <div className={styles.socialLinks}>
        <a href="/">
          <MdEmail />
        </a>
        <a href="/">
          <RiLinkedinBoxFill />
        </a>
        <a href="/">
          <RiYoutubeFill />
        </a>
        <a href="/">
          <RiFacebookBoxFill />
        </a>
      </div>
    </footer>
  );
}

export default Footer
