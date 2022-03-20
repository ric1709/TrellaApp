import { configureStore } from "@reduxjs/toolkit";
import addCardSlice from "./addCard";
import authSlice from "./auth";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        addCard:addCardSlice.reducer,
    }
})

export default store;