import React from 'react';
import styles from './resourceSection.module.css'
import blogImg from "../../Assets/blog.jpg";


// TODO: 1. Change hover of the divs with classnames resourceCard
// TODO: 2. Change pictures of resource cards, currently same image use hui hai
// TODO: 3. Update resource card links to their respective resources page sections, when resource page is ready


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