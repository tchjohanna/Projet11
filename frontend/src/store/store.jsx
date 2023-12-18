import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

// Actions (Définition des actions Redux)
export const logIn = createAction('logIn'); // Action pour la connexion
export const logOut = createAction('logOut'); // Action pour la déconnexion
export const setUserData = createAction('setUserData'); // Action pour définir les données de l'utilisateur
export const updateUserData = createAction('updateUserData'); // Action pour mettre à jour les données de l'utilisateur
export const setUserName = createAction('setUserName'); // Action pour mettre à jour les données de l'utilisateur
// Initial state (État initial du réducteur)
const initialState = {
    name: "userReducer",
    connected: false, // Indique si l'utilisateur est connecté ou non
    JWTtoken: null, // Token d'authentification JSON Web Token
    userData: {}, // Données de l'utilisateur
}

// Reducer (Définition du réducteur Redux)
const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(logIn, (draft, action) => { // Gestion de l'action de connexion
            if (!draft.connected) {
                draft.connected = true;
                draft.JWTtoken = action.payload; // Stocker le token d'authentification
            }
        })
        .addCase(logOut, (draft) => { // Gestion de l'action de déconnexion
            if (draft.connected) {
                draft.connected = false;
                draft.userData = {}; // Réinitialiser les données de l'utilisateur
                draft.JWTtoken = null; // Réinitialiser le token d'authentification
            }
        })
        .addCase(setUserData, (draft, action) => { // Gestion de l'action pour définir les données de l'utilisateur
            draft.userData = action.payload; // Mettre à jour les données de l'utilisateur
        })
        .addCase(updateUserData, (draft, action) => { // Gestion de l'action pour mettre à jour les données de l'utilisateur
            draft.userData.firstName = action.payload.firstName; // Mettre à jour le prénom
            draft.userData.lastName = action.payload.lastName; // Mettre à jour le nom de famille
        })
        .addCase(setUserName, (draft, action) => { // Gestion de l'action pour mettre à jour les données de l'utilisateur
          draft.userData.userName = action.payload.userName; // Mettre à jour le prénom
        })
})

// Sélecteurs Redux (Fonctions pour sélectionner des données spécifiques depuis le store)
// Exportez tous vos sélecteurs
export const selectUserLogin = (state) => state.user.connected;
export const selectJWT = (state) => state.user.JWTtoken;
export const selectUserData = (state) => state.user.userData;
export const selectFirstName = (state) => {
  const userData = selectUserData(state);
  return userData ? userData.firstName : '';
};
export const selectLastName = (state) => {
  const userData = selectUserData(state);
  return userData ? userData.lastName : '';
};

export const selectUserName = (state) => {
  const userData = selectUserData(state);
  console.log(userData)
  return userData ? userData.userName : '';
};


// Création et configuration du store Redux en utilisant configureStore
export const store = configureStore({
  // Définition des réducteurs pour gérer les différentes parties de l'état de l'application
  reducer: {
    user: userReducer, // Utilisation du réducteur `userReducer` pour gérer l'état de l'utilisateur
  },
});
