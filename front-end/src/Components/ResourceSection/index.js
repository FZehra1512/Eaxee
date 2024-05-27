import React from 'react';
import styles from './resourceSection.module.css'
import blogImg from "../../Assets/blog.jpg";
import { Link } from "react-router-dom";


// TODO: 1. Change hover of the divs with classnames resourceCard
// Solved: new hover effect added.

// TODO: 2. Change pictures of resource cards, currently same image use hui hai

// TODO: 3. Update resource card links to their respective resources page sections, when resource page is ready
// - Blog Card is linked to its respective page. (Blog Page ready)

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
          <Link to="/events" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})` }}
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
