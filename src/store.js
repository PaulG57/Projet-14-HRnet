import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import employeesReducer from './features/employeesSlice';

// Config persist
const persistConfig = {
  key: 'employees',
  storage,
};

// reducer persistant
const persistedReducer = persistReducer(persistConfig, employeesReducer);

// store avec le reducer persistant
export const store = configureStore({
  reducer: persistedReducer,
});