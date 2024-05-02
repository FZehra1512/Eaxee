import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../Components/Navbar'
import TeamMembers from '../../Components/TeamMembers';

const Home = () => {
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
          <div className={styles.featureDescription}>
            <h2>Optimize Performance</h2>
            <ul>
              <li>
                Boost user adoption, reduce frustration, and empower seamless
                collaboration with multiple language support
              </li>
              <li>
                Save significant time and effort with bulk data import and
                export capabilities
              </li>
              <li>
                Informed decision-making and smoother transitions with multiple
                architecture support
              </li>
            </ul>
          </div>

          <div className={styles.featureDescription}>
            <h2>Minimize Costs</h2>
            <ul>
              <li>
                Optimized workflows and data management for significant cost
                savings and improved operational effectiveness
              </li>
              <li>
                Empower users to work smarter, not harder, and unlock higher
                productivity at a reduced cost per employee
              </li>
              <li>
                Free up valuable IT resources from mundane tasks to focus on
                high-impact initiatives that deliver greater ROI
              </li>
            </ul>
          </div>

          <div className={styles.featureDescription}>
            <h2>Mitigate Risks</h2>
            <ul>
              <li>
                Boost user adoption, reduce frustration, and empower seamless
                collaboration with multiple language support
              </li>
              <li>
                Save significant time and effort with bulk data import and
                export capabilities
              </li>
              <li>
                Informed decision-making and smoother transitions with multiple
                architecture support
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eaxee Tools Description */}
      <div className={styles.mainTools}>
        <h1 className={styles.mainToolsHeading}>All the tools you need</h1>

        <div className={styles.toolDetails}>
          <img src="/logo.svg" alt="image" />
          <div className={styles.toolDescription}>
            <h1>Data Driven</h1>
            <p>
              <span>Configurable Dashboards for Data Visualization</span>
            </p>
            <p>
              Empower stakeholders across your organization with configurable
              dashboards for data visualization.
            </p>
            <p>
              Create personalized dashboards that display critical insights and
              metrics, empowering teams to make data-driven decisions and drive
              organizational success
            </p>
          </div>
        </div>

        <div className={styles.toolDetails}>
          <div className={styles.toolDescription}>
            <h1>Data Driven</h1>
            <p>
              <span>Configurable Dashboards for Data Visualization</span>
            </p>
            <p>
              Empower stakeholders across your organization with configurable
              dashboards for data visualization.
            </p>
            <p>
              Create personalized dashboards that display critical insights and
              metrics, empowering teams to make data-driven decisions and drive
              organizational success
            </p>
          </div>
          <img src="/logo.svg" alt="image" />
        </div>

        <div className={styles.toolDetails}>
          <img src="/logo.svg" alt="image" />
          <div className={styles.toolDescription}>
            <h1>Data Driven</h1>
            <p>
              <span>Configurable Dashboards for Data Visualization</span>
            </p>
            <p>
              Empower stakeholders across your organization with configurable
              dashboards for data visualization.
            </p>
            <p>
              Create personalized dashboards that display critical insights and
              metrics, empowering teams to make data-driven decisions and drive
              organizational success
            </p>
          </div>
        </div>

        <div className={styles.toolDetails}>
          <div className={styles.toolDescription}>
            <h1>Data Driven</h1>
            <p>
              <span>Configurable Dashboards for Data Visualization</span>
            </p>
            <p>
              Empower stakeholders across your organization with configurable
              dashboards for data visualization.
            </p>
            <p>
              Create personalized dashboards that display critical insights and
              metrics, empowering teams to make data-driven decisions and drive
              organizational success
            </p>
          </div>
          <img src="/logo.svg" alt="image" />
        </div>
      </div>

      {/* Meet the team */}
      
      <TeamMembers />
    </>
  );
}

export default Home