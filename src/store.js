import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employeesReducer from './features/employeesSlice';

const persistConfig = {
  key: 'employees',
  storage,
};

// combine reducers
const rootReducer = combineReducers({
  employees: employeesReducer,
});

// reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store avec le reducer persistant
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver la vérification de la sérialisation
    }),
});

export const persistor = persistStore(store);