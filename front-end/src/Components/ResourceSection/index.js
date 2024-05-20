import React from 'react';
import styles from './resourceSection.module.css'
import blogImg from "../../Assets/blog.jpg";

const ResourceSection = () => {
  return (
    <div className={styles.resourcesSection}>
      <h1 className={styles.resourcesHeading}>Resources</h1>
      <div className={styles.resources}>
        <div className={styles.rows}>
          <a href="/" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <h1>Blog</h1>
            </div>
          </a>
          <a href="/" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <h1>White Paper</h1>
            </div>
          </a>
        </div>
        <div className={styles.rows}>
          <a href="/" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <h1>Documentation</h1>
            </div>
          </a>
          <a href="/" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
            >
              <h1>Events</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResourceSection
