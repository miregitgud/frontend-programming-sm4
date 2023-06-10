import StyledMovie from "./StyledMovie";

//  props catch
const Movie = (props) => {
    // destructuring object
    const { movie } = props;
    const year = movie.year || movie.release_date

    return (
      <StyledMovie>
        <div className="movie">
            <img
              className="movie__image"
              src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="movie__title">{movie.title}</h3>
            <p className="movie__type">{movie.type}</p>
            <p className="movie__date">{year.substring(0,4)}</p>
          </div>  
      </StyledMovie>     
    )
}

export default Movie;