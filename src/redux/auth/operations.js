import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
});

export const setAuthHeader = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const delAuthHeader = () => {
    instance.defaults.headers.common.Authorization = '';
}

export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async (credentials, thunkAPI) => {
        try {
            const response = await instance.post('users/signup', credentials)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            if(error.response.data.code===11000 && error.response.data.name==='MongoError'){
                Notify.failure('User with this email is already in the database');
            }
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await instance.post('/users/login', credentials)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            if(error.response.status===400){
                Notify.failure('Enter the correct password or email');
            }
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)

export const logOutThunk = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
         try {
           await instance.post('/users/logout')
             delAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        
        try {
            setAuthHeader(persistToken);
           const response = await instance('/users/current');
            return response.data
        } catch (error) {
          return  thunkAPI.rejectWithValue(error.message)
        }
    }
)
