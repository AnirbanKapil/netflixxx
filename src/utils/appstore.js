import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice';
import movieslice from './movieslice';
import gptSlice from './gptSlice';
import configslice from './configslice';

const appStore = configureStore({
    reducer : {
        user : userSlice,
        movies : movieslice,
        gpt : gptSlice,
        config : configslice
    }
});

export default appStore;