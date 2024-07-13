import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice';
import movieslice from './movieslice';
import gptSlice from './gptSlice';

const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : movieslice,
        gpt : gptSlice
    }
});

export default appStore;