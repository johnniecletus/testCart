import { createSlice } from "@reduxjs/toolkit";


const initialCart = { 
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    totalPrice: 0,
};

const CartSlice = createSlice({
    name : "cart",
    initialState: initialCart,
    reducers: {
        addNewCartItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    quantity: 1,
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    name: newItem.title,     
                })
            }else{
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                
            }
        },
        removeNewCartItem(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id.id);
            if(state.totalQuantity === 0){
                state.totalQuantity = 0
            }else{
                state.totalQuantity--;
            };
            
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                if(existingItem.quantity === 0){
                    existingItem.quantity = 0
                }else{
                    existingItem.quantity--;
                }
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        totalValue(state, action){
            const itemIsAvailable = action.payload
            const existingItem = state.items.find()
        }
    }
});

export const CartAction = CartSlice.actions;

export default CartSlice;

