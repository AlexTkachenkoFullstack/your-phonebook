import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registrationThunk, logOutThunk, refreshThunk } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    error:null,
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfild = (state) => {
    state.isLoading = false;
    state.error = null;
}

const handleFulfildReg = (state, action) => {
    handleFulfild(state)
    state.user = action.payload.user;
    state.token = action.payload.token;
}

const handleFulfildLogIn = (state, action) => {
    handleFulfild(state);
    state.user = action.payload.user;
    state.token = action.payload.token;
}

const handleFulfildLogOut = (state) => {
    handleFulfild(state)
    state.user = { name: null, email: null };
    state.token = null;
}

const handleFulfildRefresh = (state, action) => {
    handleFulfild(state)
    state.user = action.payload;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error=action.payload
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(registrationThunk.pending, handlePending)
            .addCase(registrationThunk.fulfilled, handleFulfildReg)
            // .addCase(registrationThunk.rejected, handleRejected)
            // .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, handleFulfildLogIn)
            // .addCase(loginThunk.rejected, handleRejected)
            // .addCase(logOutThunk.pending, handlePending)
            .addCase(logOutThunk.fulfilled, handleFulfildLogOut)
            .addCase(logOutThunk.rejected, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                handleRejected()
            })
            .addCase(refreshThunk.pending, (state, action) => {
                state.isLoading=true
            })
            .addCase(refreshThunk.fulfilled, handleFulfildRefresh)
            // .addCase(refreshThunk.rejected, handleRejected)
            .addMatcher(isAnyOf(registrationThunk.pending, loginThunk.pending, logOutThunk.pending), handlePending)
            .addMatcher(isAnyOf(registrationThunk.rejected,loginThunk.rejected,refreshThunk.rejected), handleRejected)
    }
})