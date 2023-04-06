import styles from "./Movies.module.css";
import Movie from "../Movie/Movie"
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

const Movies = () => {

  // membuat variable state
  const [movies, setMovies] = useState(data)

  // buat fungsi tambah film
  // dijalankan ketika tombol diklik
  const addMovie = () => {
    const movie = {
      id: nanoid(10),
      title: "Interstellar",
      year: "2014",
      type: "Movie",
      poster: "https://picsum.photos/300/400"
    };

    // menambahkan movie ke state movies
    // spread operator: copy dan merge array
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
        {/* 
        Looping data movies: map
        Render Component Movie
        Kirim props Movie
         */}
        {
          movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })
        }
        </div>
        <button onClick={addMovie}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;