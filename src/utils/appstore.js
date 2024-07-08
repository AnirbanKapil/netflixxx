import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice';
import movieslice from './movieslice';


const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : movieslice
    }
});

export default appStore;