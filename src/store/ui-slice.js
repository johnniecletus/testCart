import { createSlice } from "@reduxjs/toolkit";


const initialUi = { cartIsVisible : false };

const UiSlice = createSlice({
    name : "Ui",
    initialState: initialUi,
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const uiAction = UiSlice.actions;

export default UiSlice;