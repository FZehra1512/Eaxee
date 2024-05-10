import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../Components/Navbar'
import TeamMembers from '../../Components/TeamMembers';
import MainTools from '../../Components/MainTools';
import blogImg from '../../Assets/blog.jpg'
import Footer from '../../Components/Footer';

const Home = () => {

  const featuresData = [
    {
      heading: "Optimize Performance",
      description: [
        "Boost user adoption, reduce frustration, and empower seamless collaboration with multiple language support",
        "Save significant time and effort with bulk data import and export capabilities",
        "Informed decision-making and smoother transitions with multiple architecture support",
      ],
    },
    {
      heading: "Minimize Costs",
      description: [
        "Optimized workflows and data management for significant cost savings and improved operational effectiveness",
        "Empower users to work smarter, not harder, and unlock higher productivity at a reduced cost per employee",
        "Free up valuable IT resources from mundane tasks to focus on high-impact initiatives that deliver greater ROI",
      ],
    },
    {
      heading: "Mitigate Risks",
      description: [
        "Boost user adoption, reduce frustration, and empower seamless collaboration with multiple language support",
        "Save significant time and effort with bulk data import and export capabilities",
        "Informed decision-making and smoother transitions with multiple architecture support",
      ],
    },
  ];

  const Feature = ({ heading, description }) => (
    <div className={styles.featureDescription}>
      <h2>{heading}</h2>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );



  return (
    <>
      <Navbar />

      {/* Description Banner with Button */}
      <div className={styles.banner}>
        <div className={styles.description}>
          <h1>Eaxee Enterprise Architecture</h1>
          <p>
            Visualize, Analyze, Optimize<span>.</span>
          </p>
        </div>
        <button className={styles.button}>Request a Demo</button>
      </div>

      {/* Animation */}
      <div className={styles.animation}>Animation</div>

      {/* Features and Benefits */}
      <div className={styles.featuresBanner}>
        <div className={styles.featuresBannerHeading}>
          <h1>Transform your IT landscape</h1>
          <p>Simplify architecture management and accelerate something</p>
        </div>
        <div className={styles.features}>
          {featuresData.map((feature, index) => (
            <Feature
              key={index}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Eaxee Tools Description */}
      <MainTools />

      {/* Meet the team */}
      <TeamMembers />

      {/* Resources */}
      <div className={styles.resourcesSection}>
        <h1 className={styles.resourcesHeading}>Resources</h1>
        <div className={styles.resources}>
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home