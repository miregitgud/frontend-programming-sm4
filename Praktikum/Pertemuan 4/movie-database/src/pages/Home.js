import Hero from '../components/Hero/Hero'
import Movies from '../components/Movies/Movies'
import AddMovieForm from '../components/AddMovieForm/AddMovieForm'
import { useState } from 'react'
import data from '../utils/constants/data'

const Main = () => {

    // membuat variable state
  const [movies, setMovies] = useState(data);

    return (
        <main>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </main>
    )
}

const Home = () => {
    return (
        <div>  
            <Main />
        </div>
    )
}

export default Home;