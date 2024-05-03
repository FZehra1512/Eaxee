import React, { useEffect } from 'react';
import styles from './teammembers.module.css';

const TeamMembers = () => {
//   useEffect(() => {
//     const wrapper = document.getElementById('teamMembersWrapper');
//     const dotsWrapper = document.createElement('div');
//     dotsWrapper.classList.add('dotsWrapper');
//     wrapper.parentNode.appendChild(dotsWrapper);
//     const dots = [];
//     const teamMembers = wrapper.querySelectorAll(`.${styles.teamMember}`);

//     const updateDots = () => {
//       dotsWrapper.innerHTML = '';
//       for (let i = 0; i < teamMembers.length; i++) {
//         const dot = document.createElement('span');
//         dot.classList.add('dot');
//         dot.setAttribute('data-index', i);
//         dotsWrapper.appendChild(dot);
//         dots.push(dot);
//       }
//       dots[0].classList.add('active');
//     };

//     const handleScroll = () => {
//       const scrollLeft = wrapper.scrollLeft;
//       const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
//       dots.forEach((dot) => dot.classList.remove('active'));
//       const activeDot = Math.round((scrollLeft / maxScrollLeft) * (dots.length - 1));
//       dots[activeDot].classList.add('active');
//     };

//     updateDots();

//     wrapper.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', updateDots);

//     return () => {
//       wrapper.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', updateDots);
//     };
//   }, []);

    const scrollLeft = () => {
        const wrapper = document.getElementById('scroller');
        wrapper.scrollBy({
        left: -250, // Adjust the scroll amount as needed
        behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        const wrapper = document.getElementById('scroller');
        wrapper.scrollBy({
        left: 250, // Adjust the scroll amount as needed
        behavior: 'smooth',
        });
    };

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


  return (
    <div className={styles.team}>
        <h1 className={styles.teamHeading}>Meet the team</h1>
        <div className={styles.teamMembersWrapper} id='scroller'>
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
        </div>     
    </div>
  );
};

export default TeamMembers;



