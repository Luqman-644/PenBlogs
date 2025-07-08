import {configureStore} from '@reduxjs/toolkit';
import authen from './authSlice';

const store = configureStore({
    reducer: {
        authen : authen,
    }
});


export default store;