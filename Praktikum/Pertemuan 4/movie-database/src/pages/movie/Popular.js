import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"

const PopularMovie = () => {
    // simpan API dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [movies, setMovies] = useState([]);

    async function getPopularMovies() {
        // fetch data dari axios
        const URL = `https://api.themoviedb.org/3/movie/popular?region=ID&api_key=${API_KEY}`;
        const response = await axios(URL);

        // simpan data ke state
        setMovies(response.data.results)
    }

    useEffect(() => {
        getPopularMovies();
    }, []);

    console.log(movies)

    return (
        <>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </>
    );
}

export default PopularMovie;