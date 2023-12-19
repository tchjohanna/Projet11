import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { userSlice } from '../features/UserSlices';
import thunk from 'redux-thunk'; // Exemple de middleware Redux Thunk

// Combine les réducteurs de toutes les tranches (slices) si nécessaire
const rootReducer = combineReducers({
  user: userSlice.reducer,
  // Ajoutez d'autres tranches ici si nécessaire
});

// Middleware Redux, par exemple Redux Thunk
const middleware = [thunk];

// Configure le store Redux en utilisant les réducteurs combinés et le middleware
const store = configureStore({
  reducer: rootReducer,
  middleware,
  // Ajoutez d'autres options de configuration ici si nécessaire
});

export default store;
