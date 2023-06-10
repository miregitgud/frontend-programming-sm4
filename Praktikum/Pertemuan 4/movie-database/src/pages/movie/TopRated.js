import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"

const TopRated = () => {
    // simpan API dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [movies, setMovies] = useState([]);

    async function getTopRated() {
        // fetch data dari axios
        const URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=ID&api_key=${API_KEY}`;
        const response = await axios(URL);

        // simpan data ke state
        setMovies(response.data.results)
    }

    useEffect(() => {
        getTopRated();
    }, []);

    console.log(movies)

    return (
        <>
            <Hero />
            <Movies title="Top-Rated Movies" movies={movies} />
        </>
    );
}

export default TopRated;