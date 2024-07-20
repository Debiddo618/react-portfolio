import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  // const [visible, setVisible] = useState(false);
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current);
  // }, [])
  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          data-aos="slide-right"
        // ref={myRef}
        // className={`${visible ? styles.showLeft : styles.hiddenLeft} ${styles.aboutImage}`}
        />
        <ul className={styles.aboutItems}>
          <li
            className={styles.aboutItem}
            data-aos="slide-left"
          // className={`${visible ? styles.showRight : styles.hiddenRight} ${styles.aboutItem}`}
          >
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience building responsive and optimized sites using React, Bootstrap, MUI, and Pure CSS animations.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            data-aos="slide-left"
          // className={`${visible ? styles.showRight : styles.hiddenRight} ${styles.aboutItem}`}
          >
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems and APIs using Django, Express, Node.js, MongoDB, and PostgreSQL.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            data-aos="slide-left"
          // className={`${visible ? styles.showRight : styles.hiddenRight} ${styles.aboutItem}`}
          >
            <img src={getImageUrl("about/python.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                I have experience cleaning and analyzing data using Python's NumPy and Pandas libraries, and in creating insightful visualizations using Tableau.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
