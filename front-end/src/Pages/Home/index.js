import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import animation from "../../Assets/eaxee organization.jpg";
import Features from "../../Components/Features";
import MainTools from "../../Components/MainTools";
import animationvideo1 from "../../Assets/videos/Diagram Compresed.mkv"
import animationvideo2 from "../../Assets/videos/Navigation(1).mkv"
import animationvideo3 from "../../Assets/videos/Roadmap.mkv"
import ResourceSection from "../../Components/ResourceSection";

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const aboutRef = useRef(null);
  const resourceRef = useRef(null);
  const homeRef = useRef(null);
  // const videos = [
  //   animationvideo1,
  //   animationvideo2,
  // ];


  const { hash } = useLocation();

  useEffect(() => {
    const videos = [
      animationvideo1,
      animationvideo2,
      animationvideo3
    ];
    const randomIndex = Math.floor(Math.random() * videos.length);
    setSelectedVideo(videos[randomIndex]);
  }, []);

  useEffect(() => {
    if (hash === "#about" && aboutRef.current) {
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

          <video
            src={selectedVideo}
            alt="Animation"
            className={styles.animation}
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
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
        {/* comment for temporary purpose, when other resources will be ready this section will continue to show */}
        {/* <ResourceSection /> */}
      </section>
    </>
  );
};

export default Home;
