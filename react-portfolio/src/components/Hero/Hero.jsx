import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm David</h1>
        <p className={styles.description}>
          I graduated in 2021 with a Bachelor of Science in Applied Mathematics from the University of Maryland, College Park. Recently, I completed a Software Engineering Bootcamp at General Assembly in 2024. I am currently seeking a position as a Junior Full-Stack Web Developer. I have hands-on experience with JavaScript using the MERN stack and Python with Django. If you'd like to learn more about my skills and experience, feel free to reach out!
        </p>
        <a href="mailto:davidzhengjobs@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
