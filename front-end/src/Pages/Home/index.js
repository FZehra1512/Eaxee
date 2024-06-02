import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import animation from "../../Assets/eaxee organization.jpg";
import Features from "../../Components/Features";
import MainTools from "../../Components/MainTools";
import ResourceSection from "../../Components/ResourceSection";

const Home = () => {
  const aboutRef = useRef(null);
  const resourceRef = useRef(null);
  const homeRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#about" && aboutRef.current ) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (hash === "#resourceSection" && resourceRef.current) {
      resourceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (hash === "#Home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      {/* Description Banner with Button */}
      <section ref={homeRef} id="Home">
        <div className={styles.banner}>
          <div className={styles.description}>
            <h1>Eaxee Enterprise Architecture</h1>
            <p>
              Visualize, Analyze, Optimize<span>.</span>
            </p>
          </div>

          <Link to="/requestDemo" style={{ color: "#fff" }}>
            <button className="button" id={styles.homeButton}>
              Request a Demo
            </button>
          </Link>

          {/* Animation TODO: Add real animation when available, remove the png image */}
          <img
            src={animation}
            alt="Animation"
            className={styles.animation}
          ></img>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about">
        {/* Features and Benefits */}
        <Features />

        {/* Eaxee Tools Description */}
        <MainTools />
      </section>

      {/* Resources */}
      <section ref={resourceRef} id="resourceSection">
        <ResourceSection />
      </section>
    </>
  );
};

export default Home;
