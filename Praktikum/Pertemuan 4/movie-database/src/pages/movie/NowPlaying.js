import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies";

const NowPlayingMovie = () => {
    // simpan API dan URL ke variable

    const dispatch = useDispatch();

    async function getNowPlayingMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.NOWPLAYING);
        const movies = response.data.results;

        // simpan data ke state
        dispatch(updateMovie(movies));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies title="Now-Playing Movies"/>
        </>
    );
}

export default NowPlayingMovie;