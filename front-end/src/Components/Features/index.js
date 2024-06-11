import React from 'react'
import styles from './features.module.css'
const Features = () => {
    const featuresData = [
      {
        heading: "User Experience and Accessibility",
        description: [
          "Eaxee offers a simple and intuitive user interface with multiple options for creating and editing objects, ensuring ease of use.",
          "The Quick Access tab allows users to access frequently used objects swiftly, enhancing productivity.",
          "Multiple filter options facilitate effective traversing, making navigation seamless and efficient.",
        ],
      },
      {
        heading: "Data Management and Flexibility",
        description: [
          "Eaxee supports bulk data import and export, streamlining the process of managing large datasets.",
          "It provides multiple downloadable formats, allowing users to choose the format that best suits their needs.",
          "The platform's tree-based hierarchical model management enables structured and organized data representation.",
        ],
      },
      {
        heading: "Customization and Global Reach",
        description: [
          "Eaxee features a highly configurable metamodel, allowing organizations to tailor the platform to their specific requirements.",
          "Configurable dashboards, catalogues, and matrices provide users with the ability to customize their views and analyses.",
          "Additionally, the platform's multilingual support ensures accessibility for users worldwide.",
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
        <h1>What is Eaxee?</h1>
        <p>
          Eaxee is a highly configurable Enterprise Architecture Management
          web-based platform that provides intuitive capabilities and
          functionalities for designing, analyzing, planning, and executing
          enterprise architecture (EA) led digital transformation across any
          organization.{" "}
        </p>
      </div>
      <div className={styles.whyeaxee}>
      <div className={styles.featuresBannerHeading}>
        <h1>Why Eaxee?</h1>
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
    </div>
  );
}

export default Features
