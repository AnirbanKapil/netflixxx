import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        moviesList : null,
        trailerList : null,
    },
    reducers : {
        addMovies : (state,action)=>{
             state.moviesList = action.payload
        },
        addTrailerVideo : (state,action) => {
             state.trailerList = action.payload 
        }
    }
})

export const {addMovies,addTrailerVideo} = movieSlice.actions 
export default movieSlice.reducer