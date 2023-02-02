import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/videoSlice"

const store = configureStore({
    reducer:{
        videoSlice:videoSlice
    }
})

export default store;