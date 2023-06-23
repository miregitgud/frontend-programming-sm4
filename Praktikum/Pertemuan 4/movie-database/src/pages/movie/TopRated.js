import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies"
import Hero from "../../components/Hero/Hero"
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies";

const TopRated = () => {
    // simpan API dan URL ke variable

    const dispatch = useDispatch()

    async function getTopRated() {
        // fetch data dari axios;
        const response = await axios(ENDPOINTS.TOPRATED);
        const movies = response.data.results;

        dispatch(updateMovie(movies));
    }

    useEffect(() => {
        getTopRated();
    }, []);

    return (
        <>
            <Hero />
            <Movies title="Top-Rated Movies"/>
        </>
    );
}

export default TopRated;