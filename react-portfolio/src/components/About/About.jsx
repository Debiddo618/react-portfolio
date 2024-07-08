import React from "react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const { ref: myRef, inView: visible, entry } = useInView();
  const { ref: myRef1, inView: visible1, entry1 } = useInView();





  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          ref={myRef}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={`${visible ? styles.showLeft : styles.hiddenLeft } ${styles.aboutImage}`}
        />
        <ul className={styles.aboutItems}>
          <li className={`${visible ? styles.showRight : styles.hiddenRight } ${styles.aboutItem}`}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience building responsive
                and optimized sites using React, Bootstrap, MUI, and Pure CSS animations.
              </p>
            </div>
          </li>
          <li className={`${visible ? styles.showRight : styles.hiddenRight } ${styles.aboutItem}`}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs using Django, Express, Node.js, MongoDB, and PostgreSQL.
              </p>
            </div>
          </li>
          <li className={`${visible ? styles.showRight : styles.hiddenRight } ${styles.aboutItem}`}>
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
