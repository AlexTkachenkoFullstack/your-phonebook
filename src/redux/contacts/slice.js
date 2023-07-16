import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, fetchContactsThunk, deleteContactThunk, changeContactThunk } from "./operations";
const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
  state.isLoading=true
}

const handleRejected = (state, action) => {
        state.isLoading = false;
        state.error=action.payload
}

const handleFulfilled = (state) => {
      state.isLoading = false;
      state.error=null
}

const handleFulfilledGet = (state, action) => {
        state.items = action.payload;
        handleFulfilled(state)
}
      
const handleFulfilledAdd=(state, action) => {
        state.items.push(action.payload)
        handleFulfilled(state)
}
    
const handleFulfilledDelete=(state, action) => {
        state.items=state.items.filter(({id})=>id!==action.payload.id)
        handleFulfilled(state)
}

const handleFulfilledChange = (state, action) => {
  state.items.map(item => {
    if (item.id !== action.payload.id) {
    return item
    } 
    item.name = action.payload.name;
    item.number = action.payload.number;
    return item
  })
  handleFulfilled(state)
}
    

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: (builder) => {
    // функция extraReducers принимает объект builder, который предоставляет методы для добавления дополнительных редюсеров
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledGet)
    //   .addCase(fetchContacts.rejected, handleRejected)
    // .addCase(addContact.pending, handlePending)
    .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
    // .addCase(addContact.rejected, handleRejected)
    // .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContact.rejected, handleRejected)
    .addCase(changeContactThunk.fulfilled, handleFulfilledChange)
      // функция isAnyOf используется для проверки, является ли текущее действие одним из указанных 
      .addMatcher(isAnyOf(fetchContactsThunk.pending, addContactThunk.pending, deleteContactThunk.pending, changeContactThunk.pending ), handlePending)
      .addMatcher(isAnyOf(fetchContactsThunk.rejected,addContactThunk.rejected, deleteContactThunk.rejected, changeContactThunk.rejected), handleRejected)
  },
  
}
)