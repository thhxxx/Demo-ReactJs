import {configureStore} from '@reduxjs/toolkit'
import LoginReducer from "./reducers/LoginReducer";
import SortReducer from "./reducers/SortReducer";

export const store = configureStore({
    reducer: {
        LoginReducer,
        SortReducer
    },
})