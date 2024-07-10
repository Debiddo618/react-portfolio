import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos'
import 'aos/dist/aos.css';
import games from "../../data/games.json";
import { useEffect } from "react";


export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <footer id="contact" className={styles.container} data-aos="flip-up">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:davidzhengjobs@gmail.com">davidzhengjobs@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/david-z-3960772a1/">linkedin.com/david-z</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Debiddo618">github.com/Debiddo618</a>
        </li>
      </ul>
    </footer>
  );
};
