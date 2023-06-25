// tahapan 1, buat slice

import { createSlice } from '@reduxjs/toolkit'
import data from '../../utils/constants/data'

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
        moviesLocal: data,
    },
    reducers: {
        addMovie(state, action) {
            state.moviesLocal.push(action.payload);
        },
        updateMovie(state, action) {
            state.movies = action.payload;
        }
    },
});

const { addMovie, updateMovie } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export { addMovie, updateMovie };