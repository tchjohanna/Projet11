import { configureStore, createSlice } from '@reduxjs/toolkit';
import { loginUser, fetchUserProfile } from "../actions/userActions";

// Création du slice utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.profile = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Exportation des actions
export const { logoutUser } = userSlice.actions;

// Configuration du store Redux
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
