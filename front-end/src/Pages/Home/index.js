import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../Components/Navbar'
import { Link } from "react-router-dom";
import animation from "../../Assets/animation.png";
import Features from "../../Components/Features";
import TeamMembers from '../../Components/TeamMembers';
import MainTools from '../../Components/MainTools';
import ResourceSection from "../../Components/ResourceSection";
import Footer from '../../Components/Footer';

// TODO: If a home subbar is added in navbar component, then add the home secion links in the subbar, so that when clicked the screen is scrolled down to the respective section
// TODO: Currently <MainTools /> component is not responsive, rest of all are responsive, check by commentting the <MainTools />

const Home = () => {

  return (
    <>
      {/* <Navbar /> */}

      {/* Description Banner with Button */}
      <section id="Home">
        <div className={styles.banner}>
          <div className={styles.description}>
            <h1>Eaxee Enterprise Architecture</h1>
            <p>
              Visualize, Analyze, Optimize<span>.</span>
            </p>
          </div>
          <button className="button" id={styles.homeButton}>
            <Link to="/requestDemo" style={{ color: "#fff" }}>
              Request a Demo
            </Link>
          </button>

          {/* Animation TODO: Add real animation when available, remove the png image */}
          <img
            src={animation}
            alt="Animation"
            className={styles.animation}
          ></img>
        </div>
      </section>

      {/* About Section */}
      <section id="about">

        {/* Features and Benefits */}
        <Features />

        {/* Eaxee Tools Description */}
        <MainTools />
      </section>

      {/* Meet the team */}
      <TeamMembers />

      {/* Resources */}
      <ResourceSection />

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}

export default Home