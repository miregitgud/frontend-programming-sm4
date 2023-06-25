import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero/Hero'
import Movies from '../components/Movies/Movies'
import { useEffect } from 'react';
import { updateMovie } from '../features/movies';

const Home = () => {
    const dispatch = useDispatch();
    const moviesLocal = useSelector((store) => store.movies.moviesLocal);

    useEffect(() => {
        // dispatch state dari movies local
        dispatch(updateMovie(moviesLocal));
    }, []);

    return (
        <>
            <Hero />
            <Movies title="Latest Movies" />
        </>
    )
}

export default Home;