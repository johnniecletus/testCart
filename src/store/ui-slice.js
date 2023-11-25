import { createSlice } from "@reduxjs/toolkit";


const initialUi = { cartIsVisible : false, notification: null };

const UiSlice = createSlice({
    name : "Ui",
    initialState: initialUi,
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiAction = UiSlice.actions;

export default UiSlice;