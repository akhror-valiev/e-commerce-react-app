import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import modalReducer from ".modalSlice";



const store = configureStore({
    reducer: {
        category: categoryReducer,
        modal: modalReducer,
    }
});

export default store;