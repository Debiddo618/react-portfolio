import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <div className={styles.container} data-aos="zoom-in">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
