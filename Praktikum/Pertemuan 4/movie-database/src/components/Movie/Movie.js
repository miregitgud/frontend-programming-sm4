import StyledMovie from "./StyledMovie";
import { Link } from "react-router-dom";

//  props catch
const Movie = (props) => {
    // destructuring object
    const { movie } = props;
    const year = movie.year || movie.release_date

    return (
      <StyledMovie>
        <div className="movie">
        <Link to={`/movie/${movie.id}`}>
        <img
              className="movie__image"
              src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="movie__title">{movie.title}</h3>
            <p className="movie__type">{movie.type}</p>
            <p className="movie__date">{year.substring(0,4)}</p>
        </Link>
          </div>  
      </StyledMovie>     
    )
}

export default Movie;