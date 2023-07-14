import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registrationThunk, logOutThunk, refreshThunk } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error:null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registrationThunk.pending, (state, _ ) => {
                state.isLoggedIn = true;
            })
            .addCase(registrationThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = false;
                state.error=null
            })
            .addCase(registrationThunk.rejected, (state, action) => {
                state.user = { name: null, email: null };
                state.token = action.payload.token;
                state.isLoggedIn = false;
                state.error=action.payload
            })
            .addCase(loginThunk.pending, (state, _) => {
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = false;
                state.error=null
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.user = { name: null, email: null };
                state.token = action.payload.token;
                state.isLoggedIn = false;
                state.error=action.payload
            })
            .addCase(logOutThunk.pending, (state, _) => {
                state.isLoggedIn = true;
            })
            .addCase(logOutThunk.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.error=null
            })
            .addCase(logOutThunk.rejected, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.error=action.payload
            })
            .addCase(refreshThunk.pending, (state, action) => {
                state.isRefreshing=true
            })
            .addCase(refreshThunk.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isRefreshing = false;
                state.error=null
            })
            .addCase(refreshThunk.rejected, (state, action) => {
                state.isRefreshing = false;
                
            })
    }
})