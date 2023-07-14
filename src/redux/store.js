import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts/slice";
import { filterSlice } from "./filterSlice";
import { authSlice } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'authRoot',
    storage,
 whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
  reducer: {
        auth: persistedReducer,
        contacts: contactsSlice.reducer,
        // filter: filterSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
