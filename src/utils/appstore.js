import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice';


const appStore = configureStore({
    reducer : {
        user : userSlice
    }
});

export default appStore;