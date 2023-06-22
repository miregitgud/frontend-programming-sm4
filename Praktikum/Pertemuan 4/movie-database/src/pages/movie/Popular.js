import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";

const PopularMovie = () => {
    // simpan API dan URL ke variable

    const [movies, setMovies] = useState([]);

    async function getPopularMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);

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
            <Movies title="Popular Movies" movies={movies}/>
        </>
    );
}

export default PopularMovie;