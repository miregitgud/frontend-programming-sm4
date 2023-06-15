// membuat variable API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// membuat variable URL API: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3";


// membuat variable endpoints (object)
const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?region=ID&api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?language=en-US&page=1&region=ID&api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?language=en-US&page=1&region=ID&api_key=${API_KEY}`,
    DETAIL: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    RECOMMENDATION: (id) => `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
}

export default ENDPOINTS;