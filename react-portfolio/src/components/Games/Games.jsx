import React from "react";

import styles from "./Games.module.css";
import { getImageUrl } from "../../utils";

import games from "../../data/games.json";

export const Games = () => {
  return (
    <section className={styles.container} id="games">
      <h2 className={styles.title}>Games</h2>
      <div className={styles.games}>
        {games.map((game, id) => (
          id % 2 === 0 ? (
            <div key={id} className={styles.game}>
              <div className={styles.gameImageContainerLeft}>
                <img src={getImageUrl(game.imageSrc)} alt="some Image" className={styles.gameImageLeft} />
              </div>
              <div className={styles.gameInfoLeft}>
                <h1>{game.title}</h1>
                <h3>{game.description}</h3>
                <div className={styles.links}>
                  <a href={game.demo} className={styles.link}>Demo</a>
                  <a href={game.source} className={styles.link}>Source</a>
                </div>
              </div>
            </div>
          ) : (
            <div key={id} className={styles.game}>
              <div className={styles.gameImageContainerRight}>
                <img src={getImageUrl(game.imageSrc)} alt="some Image" className={styles.gameImageRight} />
              </div>
              <div className={styles.gameInfoRight}>
                <h1>{game.title}</h1>
                <h3>{game.description}</h3>
                <div className={styles.links}>
                  <a href={game.demo} className={styles.link}>Demo</a>
                  <a href={game.source} className={styles.link}>Source</a>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};