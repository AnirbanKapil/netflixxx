import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        moviesList : null,
        popularMoviesList : null,
        upcommingMoviesList : null,
        trailerList : null,
    },
    reducers : {
        addMovies : (state,action)=>{
             state.moviesList = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.popularMoviesList = action.payload
       },
        addUpcommingMovies : (state,action)=>{
            state.upcommingMoviesList = action.payload 
        }, 
        addTrailerVideo : (state,action) => {
             state.trailerList = action.payload 
        }
    }
})

export const {addMovies,addTrailerVideo,addPopularMovies,addUpcommingMovies} = movieSlice.actions 
export default movieSlice.reducer