// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

// Reducers et Thunks pour l'authentification...

export default authSlice.reducer;
