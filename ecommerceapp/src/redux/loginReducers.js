import { createSlice } from "@reduxjs/toolkit";

export const loginReducers = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        Login: (state) => {
            state.isLoggedIn = true
        },
        LogOut: (state) => {
            state.isLoggedIn = false
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    LogOut,
    Login
} = loginReducers.actions;

export default loginReducers.reducer;
