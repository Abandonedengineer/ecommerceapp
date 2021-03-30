import { createSlice } from "@reduxjs/toolkit";

export const cartReducers = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            let cart = state.cart
            let payload = action.payload
            let existingCart = cart.filter((item) => { return item.product_id == payload.product_id })
            let otherCartItems = cart.filter((item) => { return item.product_id != payload.product_id })
            if (existingCart.length == 0) {
                payload.quantity = 1
                state.cart = [payload, ...otherCartItems]
            } else {
                let existingItem = existingCart[0]
                existingItem.quantity = existingItem.quantity + 1
                state.cart = [existingItem, ...otherCartItems]
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    addToCart,
    clearCart
} = cartReducers.actions;

export default cartReducers.reducer;
