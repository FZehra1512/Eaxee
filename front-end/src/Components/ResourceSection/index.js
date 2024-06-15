import React from 'react';
import styles from './resourceSection.module.css'
import blogImg from "../../Assets/blog.png";
// import Event from "../../Assets/images/Event.jpeg";
// import Documentation from "../../Assets/images/Documentation.webp";
// import Whitepaper from "../../Assets/images/Whitepaper.jpg";
import demoVideo from "../../Assets/demoVideoResource.png";
import { Link } from "react-router-dom";

const ResourceSection = () => {

  return (
    <div className={styles.resourcesSection}>
      <h1 className={`${styles.resourcesHeading} mainHeading`}>Resources</h1>
      <div className={styles.resources}>
        {/* <div className={styles.rows}>
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
        </div> */}

        <div className={styles.singleRow}>
          <Link to="/blog" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${blogImg})`}}
            ></div>
            <h1 className='heading mainHeading'>Blogs</h1>
          </Link>
          <Link  to="/videos" className={styles.resourceCard}>
            <div
              className={styles.resourceCardImg}
              style={{ backgroundImage: `url(${demoVideo})`}}
            ></div>
            <h1 className='heading mainHeading'>Demo Videos</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResourceSection
