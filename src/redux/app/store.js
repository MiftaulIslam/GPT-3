import { configureStore } from "@reduxjs/toolkit";
import  modetoggleReducer  from "../features/darkwhiteToggleSlice";

const store = configureStore({
    reducer:{
        modetogging: modetoggleReducer
    }
})
export default store