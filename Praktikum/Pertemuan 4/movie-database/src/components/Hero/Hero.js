import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import axios from "axios";

import Button from "../ui/Button/Button";

const Hero = () => {
const [movie, setMovie] = useState("");
const API_KEY= process.env.REACT_APP_API_KEY;

const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  // mendapatkan 1 data dari data trending movie
  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    console.log(response.data.results[0]);
    return response.data.results[getRandomInt(20)];
  }

  useEffect(() => {
    getTrendingMovie();
  }, [])

  // membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {

    // ambil 1 data trending movie, lalu ambil id-nya
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;

    // Fetch detail movie berdasarkan id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    // Update data movie dari axios ke state movie
    setMovie(response.data);
  }

  useEffect(() => {
    getDetailMovie();
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.title}</h2>
          <h3 className={styles.hero__genre}>
            {genres}
          </h3>
          <p className={styles.hero__description}>
            {movie.overview}
          </p>
          <Button as="a" href={trailer} target="_blank" size="md" variant="secondary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;