import React from 'react';
import styles from './resourceSection.module.css'
import blogImg from "../../Assets/blog.jpg";
import Event from "../../Assets/images/Event.jpeg";
import Documentation from "../../Assets/images/Documentation.webp";
import Whitepaper from "../../Assets/images/Whitepaper.jpg";
import { Link } from "react-router-dom";

const ResourceSection = () => {

  return (
    <div className={styles.resourcesSection}>
      <h1 className={styles.resourcesHeading}>Resources</h1>
      <div className={styles.resources}>
        <div className={styles.rows}>
          <Link to="/blog" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <h1>Blog</h1>
            </div>
          </Link>
          <Link to="/whitepaper" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${Whitepaper})` }}
            >
              <h1>White Paper</h1>
            </div>
          </Link>
        </div>
        <div className={styles.rows}>
          <Link to="/documentation" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${Documentation})` }}
            >
              <h1>Documentation</h1>
            </div>
          </Link>
          <Link to="/events" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${Event})` }}
            >
              <h1>Events</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResourceSection
