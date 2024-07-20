import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm David</h1>
        <p className={styles.description}>
          Detail-oriented full stack software developer with a background in applied mathematics and customer service. Bringing over 3 years of experience in fast-paced customer service environments, adept at effective communication with clients and collaborating with team members to foster a productive work environment.        </p>
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
