import React from 'react'
import styles from './features.module.css'
// TODO: Add correct information in featureData array
const Features = () => {

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
  );
}

export default Features
