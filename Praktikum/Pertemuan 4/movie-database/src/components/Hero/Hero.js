import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

import Button from "../ui/Button/Button";

const Hero = () => {
const [movie, setMovie] = useState("");

useEffect(function () {
  // fetching data

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);

    console.log(data);
  }

  fetchMovie();
},
[]
);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
            {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
            {movie.Plot}
          </p>
          <Button size="md" variant="secondary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;