import { configureStore } from "@reduxjs/toolkit";
import favoriteReducers from "./favorite";

export const store = configureStore({
    reducer:{
        favoriteMeals: favoriteReducers
    }
});

