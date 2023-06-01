import StyledMovie from "./StyledMovie";

//  props catch
const Movie = (props) => {
    // destructuring object
    const { movie } = props;

    return (
      <StyledMovie>
        <div className="movie">
            <img
              className="movie__image"
              src={movie.poster}
              alt=""
            />
            <h3 className="movie__title">{movie.title}</h3>
            <p className="movie__type">{movie.type}</p>
            <p className="movie__date">{movie.year}</p>
          </div>  
      </StyledMovie>     
    )
}

export default Movie;