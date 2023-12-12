import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

// Créez un thunk asynchrone pour gérer la connexion de l'utilisateur
export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  // Vous pouvez implémenter la logique de connexion ici, par exemple, en faisant une requête API
  const response = await yourLoginApiFunction(credentials);
  return response.data; // Assurez-vous que votre API renvoie les données de l'utilisateur après la connexion
});

// Créez un thunk asynchrone pour gérer la déconnexion de l'utilisateur
export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  // Implémentez la logique de déconnexion ici
  // Par exemple, réinitialisez les données de l'utilisateur dans le state
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
