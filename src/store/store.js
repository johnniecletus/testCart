import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import CartSlice from "./cart";


const store = configureStore({
    reducer: {
        Ui: UiSlice.reducer, cart: CartSlice.reducer,
    }
});

export default store;