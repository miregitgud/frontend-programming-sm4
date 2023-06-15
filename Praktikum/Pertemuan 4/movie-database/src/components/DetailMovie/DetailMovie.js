import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/Button/Button";
import StyledDetailMovie from "./StyledDetailMovie";
import ENDPOINTS from "../../utils/constants/endpoints";

const DetailMovie = () => {
    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    async function getDetailMovie(id) {
        const response = await axios(ENDPOINTS.DETAIL(id));
        setMovie(response.data);
        console.log(response);
    }

    useEffect(() => {
        getDetailMovie(params.id);
    }, [params.id])

    return <StyledDetailMovie>
        <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
        </div>
        <div className="info">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview} </p>
            <Button as="a" href={trailer}>Watch Trailer</Button>
        </div>
    </StyledDetailMovie>
}

export default DetailMovie;