import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setStatusFilter(state, action) {
          return  state=action.payload
        }
    }
})

export const getStatusFilter=state=>state.filter
export const { setStatusFilter } =filterSlice.actions