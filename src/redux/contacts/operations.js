import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";
import { Notify } from "notiflix";
import { setAuthHeader } from "redux/auth/operations";
export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetch',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState()
            if (state.auth.token) {
                setAuthHeader(state.auth.token)
            } else {
                throw new Error('No token')
            }
            const response = await instance('/contacts')
            console.log(response.data)
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)


export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, {rejectWithValue}) => {
        try {
            const response = await instance.post('/contacts', contact )
            Notify.success('Сontact was added', { fontSize:'20px', width:'300px'});
            return  response.data 
        } catch (error) {
          return  rejectWithValue(error.message)
        }
       
    }
)

export const deleteContactThunk = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await instance.delete(`/contacts/${id}`)
            Notify.failure('Сontact was deleted',{ fontSize:'20px',width:'300px'});
            return  response.data
        } catch (error) {
          return  thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const changeContactThunk = createAsyncThunk(
    'contacts/changeContact',
    async ({ id, contact }, thunkAPI) => {
        try {
            const response = await instance.patch(`/contacts/${id}`, contact)
             Notify.success('Сontact was changed', { fontSize:'20px', width:'300px'});
            return (response.data)//{id,name, data}
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)