import axios from "axios";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies";

const Detail = () => {
    const params = useParams();
    const dispatch = useDispatch();

    async function getRecommendedMovies(id) {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        const movies = response.data.results;

        dispatch(updateMovie(movies))
        console.log(response);
    }

    useEffect(() => {
        getRecommendedMovies(params.id);
    }, [params.id]);


return (
    <>
    <DetailMovie />
    <Movies/>
    </>
)
}
export default Detail;