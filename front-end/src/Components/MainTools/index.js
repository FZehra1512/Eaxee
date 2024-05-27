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
  // TODO: Should i add an intro of what is eaxee? why choose eaxee?
  // TODO: Add correct tools description
  // TODO: Added animations are not working on mobile screens
  return (
    <div className={styles.mainTools}>
      <h1 className={styles.mainToolsHeading}>All the tools you need</h1>

      {/* Tool 1 */}
      <div className={styles.toolDetails}>
        <img src={tool1Img} alt="tool1Img" id={styles.tool1Img} />
        <div className={styles.toolDescription}>
          <h1>Data Driven</h1>
          <p>
            <span>Configurable Dashboards for Data Visualization.</span>
          </p>
          <p>
            Empower stakeholders across your organization with configurable
            dashboards for data visualization.
          </p>
          <p>
            Create personalized dashboards that display critical insights and
            metrics, empowering teams to make data-driven decisions and drive
            organizational success.
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
          <h1>Plan, Track, and Identify</h1>
          <p>
            <span>
              Streamlined roadmap planning, intuitive diagram visualization,
              configurable matrices, and powerful object dependency analysis.
            </span>
          </p>
          <p>
            With drag-and-drop functionality and a user-friendly interface,
            eaxee makes architectural modeling a breeze.
          </p>
          <p>
            Effortlessly monitor progress, identify bottlenecks, and stay ahead
            of the curve with Roadmaps.
          </p>
          <p>
            Experience enhanced data accessibility and improved decision-making
            through efficient cataloging and matrix-based analysis.
          </p>
        </div>
      </div>

      {/* Tool 3 */}
      <div className={styles.toolDetails}>
        <img src={tool3Img} alt="tool3Img" id={styles.tool3Img} />
        <div className={styles.toolDescription}>
          <h1>Seamless Data Management</h1>
          <p>
            <span>
              Focus on more critical tasks while enjoying a seamless and
              efficient data management experience.
            </span>
          </p>
          <p>
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
          <h1>Meet the Meta Modeler</h1>
          <p>
            <span>
              Say goodbye to rigid frameworks and embrace the freedom to shape
              your enterprise architecture to suit your unique needs.
            </span>
          </p>
          <p>
            Eaxee Meta Modeler empowers you to configure and modify your
            meta-model effortlessly using a sleek graphical interface.
          </p>
          <p>
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
          <h1>Secure Collaboration</h1>
          <p>
            <span>
              Unleash the Potential of Seamless Management with the powerful
              Administration module.
            </span>
          </p>
          <p>
            Eaxee Organization empowers you with unparalleled capabilities for
            user, license, and repository management.
          </p>
          <p>
            <span>Effortless User management:</span> Easily assign roles, and
            control user privileges.
          </p>
          <p>
            <span>Seamless License Management:</span> Keep track of licenses and
            ensure compliance effortlessly.
          </p>
          <p>
            <span>Efficient Repository Management:</span> Say goodbye to
            information silos and data chaos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainTools;



// import tool1Img from "../../Assets/eaxee organization.jpg";
// import tool2Img1 from "../../Assets/makri web.jpg";
// import tool2Img2 from "../../Assets/Roadmap.jpg";
// import tool3Img from "../../Assets/Impex.jpg";
// import tool4Img from "../../Assets/Meta Modeler.png";
// import tool5Img1 from "../../Assets/License Management.jpg";
// import tool5Img2 from "../../Assets/License Management.jpg";

// import React from "react";
// import styles from "./maintools.module.css";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// const MainTools = () => {
//   const leftAnimationVariant = {
//     visible: { x: "0", opacity: 1, scale: 1, transition: { duration: 0.8 } },
//     hidden: { x: "-100%", opacity: 0, scale: 0 },
//   };

//   const rightAnimationVariant = {
//     visible: { x: "0", opacity: 1, scale: 1, transition: { duration: 0.8 } },
//     hidden: { x: "100%", opacity: 0, scale: 0 },
//   };

//   const Img = ({ src, imgId, animation }) => {
//     const control = useAnimation();
//     const [refImg, inViewImg] = useInView();

//     useEffect(() => {
//       if (inViewImg) {
//         control.start("visible");
//       } else {
//         control.start("hidden");
//       }
//     }, [control, inViewImg]);

//     return (
//       <motion.img
//         src={src}
//         alt={imgId}
//         id={styles[imgId]}
//         ref={refImg}
//         variants={animation}
//         initial="hidden"
//         animate={control}
//       />
//     );
//   };

//   const ToolDetails = ({ extraClass, image, animation, description }) => {
//     const control = useAnimation();
//     const [ref, inView] = useInView();

//     useEffect(() => {
//       if (inView) {
//         control.start("visible");
//       } else {
//         control.start("hidden");
//       }
//     }, [control, inView]);

//     return (
//       <div
//         className={`${styles.toolDetails} ${
//           extraClass ? `${styles[extraClass]}` : ""
//         }`}
//       >
//         {image}
//         <motion.div
//           className={styles.toolDescription}
//           ref={ref}
//           variants={animation}
//           initial="hidden"
//           animate={control}
//         >
//           {description}
//         </motion.div>
//       </div>
//     );
//   };

//   return (
//     <div className={styles.mainTools}>
//       <h1 className={styles.mainToolsHeading}>All the tools you need</h1>

//       {/* Tool 1 */}
//       <ToolDetails
//         image={
//           <Img
//             src={tool1Img}
//             imgId="tool1Img"
//             animation={leftAnimationVariant}
//           />
//         }
//         animation={rightAnimationVariant}
//         description={
//           <>
//             <h1>Data Driven</h1>
//             <p>
//               <span>Configurable Dashboards for Data Visualization.</span>
//             </p>
//             <p>
//               Empower stakeholders across your organization with configurable
//               dashboards for data visualization.
//             </p>
//             <p>
//               Create personalized dashboards that display critical insights and
//               metrics, empowering teams to make data-driven decisions and drive
//               organizational success.
//             </p>
//           </>
//         }
//       />

//       {/* Tool 2 */}
//       <ToolDetails
//         extraClass="reversed"
//         image={
//           <div className={styles.tool2Images}>
//             <Img
//               src={tool2Img1}
//               imgId="tool2Img1"
//               animation={rightAnimationVariant}
//             />
//             <Img
//               src={tool2Img2}
//               imgId="tool2Img2"
//               animation={rightAnimationVariant}
//             />
//           </div>
//         }
//         animation={leftAnimationVariant}
//         description={
//           <>
//             <h1>Plan, Track, and Identify</h1>
//             <p>
//               <span>
//                 Streamlined roadmap planning, intuitive diagram visualization,
//                 configurable matrices, and powerful object dependency analysis.
//               </span>
//             </p>
//             <p>
//               With drag-and-drop functionality and a user-friendly interface,
//               eaxee makes architectural modeling a breeze.
//             </p>
//             <p>
//               Effortlessly monitor progress, identify bottlenecks, and stay
//               ahead of the curve with Roadmaps.
//             </p>
//             <p>
//               Experience enhanced data accessibility and improved
//               decision-making through efficient cataloging and matrix-based
//               analysis.
//             </p>
//           </>
//         }
//       />

//       {/* Tool 3 */}
//       <ToolDetails
//         image={
//           <Img
//             src={tool3Img}
//             imgId="tool3Img"
//             animation={leftAnimationVariant}
//           />
//         }
//         animation={rightAnimationVariant}
//         description={
//           <>
//             <h1>Seamless Data Management</h1>
//             <p>
//               <span>
//                 Focus on more critical tasks while enjoying a seamless and
//                 efficient data management experience.
//               </span>
//             </p>
//             <p>
//               Eaxee Impex is the ultimate solution for effortless bulk data
//               import and export. Say goodbye to manual data entry and
//               time-consuming file transfers. Streamline your operations, save
//               time, and reduce errors with our intuitive and powerful data
//               management tool.
//             </p>
//           </>
//         }
//       />

//       {/* Tool 4 */}
//       <ToolDetails
//         extraClass="reversed"
//         image={
//           <Img
//             src={tool4Img}
//             imgId="tool4Img"
//             animation={rightAnimationVariant}
//           />
//         }
//         animation={leftAnimationVariant}
//         description={
//           <>
//             <h1>Meet the Meta Modeler</h1>
//             <p>
//               <span>
//                 Say goodbye to rigid frameworks and embrace the freedom to shape
//                 your enterprise architecture to suit your unique needs.
//               </span>
//             </p>
//             <p>
//               Eaxee Meta Modeler empowers you to configure and modify your
//               meta-model effortlessly using a sleek graphical interface.
//             </p>
//             <p>
//               Unlock the power of customization, collaboration, and
//               visualization with Eaxee Meta Modeler and drive your organization
//               towards unparalleled success.
//             </p>
//           </>
//         }
//       />

//       {/* Tool 5 */}
//       <ToolDetails
//         image={
//           <div className={styles.tool2Images}>
//             <Img
//               src={tool5Img1}
//               imgId="tool2Img1"
//               animation={leftAnimationVariant}
//             />
//             <Img
//               src={tool5Img2}
//               imgId="tool2Img2"
//               animation={leftAnimationVariant}
//             />
//           </div>
//         }
//         animation={rightAnimationVariant}
//         description={
//           <>
//             <h1>Secure Collaboration</h1>
//             <p>
//               <span>
//                 Unleash the Potential of Seamless Management with the powerful
//                 Administration module.
//               </span>
//             </p>
//             <p>
//               Eaxee Organization empowers you with unparalleled capabilities for
//               user, license, and repository management.
//             </p>
//             <p>
//               <span>Effortless User management:</span> Easily assign roles, and
//               control user privileges.
//             </p>
//             <p>
//               <span>Seamless License Management:</span> Keep track of licenses
//               and ensure compliance effortlessly.
//             </p>
//             <p>
//               <span>Efficient Repository Management:</span> Say goodbye to
//               information silos and data chaos.
//             </p>
//           </>
//         }
//       />
//     </div>
//   );
// };

// export default MainTools;
