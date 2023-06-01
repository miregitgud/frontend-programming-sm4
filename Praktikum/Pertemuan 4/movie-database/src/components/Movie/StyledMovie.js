import styled from "styled-components";

const StyledMovie = styled.div`
.movie {
    margin-bottom: 1rem;
    padding: 1rem;
  }
  
  .movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .movie__title {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }
  
  .movie__date {
    color: #64748b;
  }

  .movie__type {
    color: #64748b;
  }
 
  
  /* Medium Screen */
@media (min-width: 768px) {
    .movie {
      flex-basis: 50%;
    }
  }

/* Large Screen */
@media (min-width: 992px) {
    .movie {
      flex-basis: 25%;
    }
  }  
`

export default StyledMovie;