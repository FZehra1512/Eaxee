import tool1Img from "../../Assets/eaxee organization.jpg";
import tool2Img1 from "../../Assets/makri web.jpg";
import tool2Img2 from "../../Assets/Roadmap.jpg";
import tool3Img from "../../Assets/Impex.jpg";
import tool4Img from "../../Assets/Meta Modeler.png";
import tool5Img1 from "../../Assets/User_Management.jpg";
import tool5Img2 from "../../Assets/License Management.jpg";
import React from 'react'
import styles from './maintools.module.css'

const MainTools = () => {
  return (
    <div className={styles.mainTools}>
      <h1 className={`${styles.mainToolsHeading} mainHeading`}>
        All the tools you need
      </h1>

      {/* Tool 1 */}
      <div className={styles.toolDetails}>
        <img src={tool1Img} alt="tool1Img" id={styles.tool1Img} />
        <div className={styles.toolDescription}>
          <h1 className="subHeading">Data Driven</h1>
          <p className="para">
            <span>Configurable Dashboards for Data Visualization.</span>
          </p>
          <p className="para">
            Empower stakeholders across your organization with configurable
            dashboards for data visualization.
          </p>
          <p className="para">
            Create personalized dashboards that display critical insights and
            metrics, empowering teams to make data-driven decisions and drive
            organizational success.
          </p>
          <p className="para">
            Monitor performance to stay ahead of the curve and
            respond proactively to emerging trends.
          </p>
        </div>
      </div>

      {/* Tool 2 */}
      <div className={`${styles.toolDetails} ${styles.reversed}`}>
        <div className={styles.tool2Images}>
          <img src={tool2Img1} alt="tool2Img1" id={styles.tool2Img1} />
          <img src={tool2Img2} alt="tool2Img2" id={styles.tool2Img2} />
        </div>
        <div className={styles.toolDescription}>
          <h1 className="subHeading">Plan, Track, and Identify</h1>
          <p className="para">
            <span>
              Streamlined roadmap planning, intuitive diagram visualization,
              configurable matrices, and powerful object dependency analysis.
            </span>
          </p>
          <p className="para">
            With drag-and-drop functionality and a user-friendly interface,
            eaxee makes architectural modeling a breeze.
          </p>
          <p className="para">
            Effortlessly monitor progress, identify bottlenecks, and stay ahead
            of the curve with Roadmaps.
          </p>
          <p className="para">
            Experience enhanced data accessibility and improved decision-making
            through efficient cataloging and matrix-based analysis.
          </p>
        </div>
      </div>

      {/* Tool 3 */}
      <div className={styles.toolDetails}>
        <img src={tool3Img} alt="tool3Img" id={styles.tool3Img} />
        <div className={styles.toolDescription}>
          <h1 className="subHeading">Seamless Data Management</h1>
          <p className="para">
            <span>
              Focus on more critical tasks while enjoying a seamless and
              efficient data management experience.
            </span>
          </p>
          <p className="para">
            Eaxee Impex is the ultimate solution for effortless bulk data import
            and export. Say goodbye to manual data entry and time-consuming file
            transfers. Streamline your operations, save time, and reduce errors
            with our intuitive and powerful data management tool.
          </p>
        </div>
      </div>

      {/* Tool 4 */}
      <div className={`${styles.toolDetails} ${styles.reversed}`}>
        <img src={tool4Img} alt="tool4Img" id={styles.tool4Img} />
        <div className={styles.toolDescription}>
          <h1 className="subHeading">Meet the Meta Modeler</h1>
          <p className="para">
            <span>
              Say goodbye to rigid frameworks and embrace the freedom to shape
              your enterprise architecture to suit your unique needs.
            </span>
          </p>
          <p className="para">
            Eaxee Meta Modeler empowers you to configure and modify your
            meta-model effortlessly using a sleek graphical interface.
          </p>
          <p className="para">
            Unlock the power of customization, collaboration, and visualization
            with Eaxee Meta Modeler and drive your organization towards
            unparalleled success.
          </p>
        </div>
      </div>

      {/* Tool 5 */}
      <div className={styles.toolDetails}>
        <div className={styles.tool2Images}>
          <img src={tool5Img1} alt="tool5Img1" id={styles.tool2Img1} />
          <img src={tool5Img2} alt="tool5Img2" id={styles.tool2Img2} />
        </div>
        <div className={styles.toolDescription}>
          <h1 className="subHeading">Secure Collaboration</h1>
          <p className="para">
            <span>
              Unleash the Potential of Seamless Management with the powerful
              Administration module.
            </span>
          </p>
          <p className="para">
            Eaxee Organization empowers you with unparalleled capabilities for
            user, license, and repository management.
          </p>
          <p className="para">
            <span>Effortless User management:</span> Easily assign roles, and
            control user privileges.
          </p>
          <p className="para">
            <span>Seamless License Management:</span> Keep track of licenses and
            ensure compliance effortlessly.
          </p>
          <p className="para">
            <span>Efficient Repository Management:</span> Say goodbye to
            information silos and data chaos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainTools;

