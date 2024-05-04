import React from "react";
import styles from "./teammembers.module.css";
import profile from "../../Assets/Profile.jpg";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";

const TeamMembers = () => {
  const team = [
    {
      profilelink: profile,
      name: "John Doe",
      position: "Software Engineer",
      linkedIn: "",
      facebook: "mussafara",
    },
    {
      profilelink: profile,
      name: "Jane Smith",
      position: "Data Scientist",
      linkedIn: "",
      facebook: "mussafara",
    },
    {
      profilelink: profile,
      name: "Alice Johnson",
      position: "Web Developer",
      linkedIn: "",
    },
    {
      profilelink: profile,
      name: "Bob Brown",
      position: "UX Designer",
      linkedIn: "",
    },
    {
      profilelink: profile,
      name: "Emily Davis",
      position: "Product Manager",
      linkedIn: "",
    },
  ];

  return (
    <div className={styles.team}>
      <h1 className={styles.teamHeading}>Meet the team</h1>
      <div className={styles.container}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.profilelink}
              alt="Team"
              className={styles.profile}
            />
            <div className={styles.memberDetails}>
              <h1>{member.name}</h1>
              <p>{member.position}</p>
              <div className={styles.memberlinks}>
                <a href={member.linkedIn} className={styles.socialLink}>
                  <RiLinkedinBoxFill />
                </a>
                {member.facebook ? (
                  <a href={member.facebook} className={styles.socialLink}>
                    <RiFacebookBoxFill />{" "}
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

{
  /* <div className={styles.teamMembersWrapper} id='scroller'>
            <div className={styles.teamMember}></div>
            <div className={styles.teamMember}></div>
            <div className={styles.teamMember}></div>
            <div className={styles.teamMember}></div>
            <div className={styles.teamMember}></div>
            <div className={styles.teamMember}></div> 
        </div>

        <div className={styles.buttons}>
            <button className={styles.scrollButton}  id={styles.leftScroll} onClick={scrollLeft}>
                &lt;
            </button>
            <button className={styles.scrollButton} id={styles.rightScroll} onClick={scrollRight}>
                &gt;
            </button>
        </div>      */
}
// const scrollLeft = () => {
//     const wrapper = document.getElementById('scroller');
//     wrapper.scrollBy({
//     left: -250, // Adjust the scroll amount as needed
//     behavior: 'smooth',
//     });
// };

// const scrollRight = () => {
//     const wrapper = document.getElementById('scroller');
//     wrapper.scrollBy({
//     left: 250, // Adjust the scroll amount as needed
//     behavior: 'smooth',
//     });
// };

// JavaScript
// const teamMembersWrapper = document.getElementById('scroller');
// const scrollButtons = document.getElementsByClassName(styles.scrollButton);
// window.addEventListener('scroll', () => {

//     const scrollY = window.scrollY;
//     if (scrollY > 10) {
//         // Scrolling vertically, set buttons to absolute
//         scrollButtons.style.position = 'absolute';
//     } else {
//         // Scrolling horizontally, set buttons to fixed
//         scrollButtons.style.position = 'fixed';
//     }
// });
