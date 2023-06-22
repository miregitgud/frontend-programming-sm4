import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";

const NowPlayingMovie = () => {
    // simpan API dan URL ke variable

    const [movies, setMovies] = useState([]);

    async function getNowPlayingMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);

        // simpan data ke state
        setMovies(response.data.results)
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    console.log(movies)

    return (
        <>
            <Hero />
            <Movies title="Now-Playing Movies" movies={movies} />
        </>
    );
}

export default NowPlayingMovie;