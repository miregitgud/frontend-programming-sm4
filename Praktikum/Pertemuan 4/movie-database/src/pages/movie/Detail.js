import axios from "axios";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";

const Detail = () => {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    async function getRecommendedMovies(id) {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        setMovies(response.data.results);
        console.log(response);
    }

    useEffect(() => {
        getRecommendedMovies(params.id);
    }, [params.id]);


return (
    <>
    <DetailMovie />
    <Movies movies={movies} />
    </>
)
}
export default Detail;