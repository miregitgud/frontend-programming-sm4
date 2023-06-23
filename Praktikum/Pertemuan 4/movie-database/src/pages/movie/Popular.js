import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies";

const PopularMovie = () => {
    // simpan API dan URL ke variable

    const dispatch = useDispatch();

    async function getPopularMovies() {
        // fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;

        // simpan data ke state
        dispatch(updateMovie(movies));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <>
            <Hero />
            <Movies title="Popular Movies"/>
        </>
    );
}

export default PopularMovie;