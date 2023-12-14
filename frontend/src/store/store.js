// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Vous pouvez ajouter d'autres slices ici si nécessaire
  },
});
