import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/store/store"; // Importez le magasin Redux
import App from "./App";

// Fonction d'initialisation et de rendu de l'application
function initializeApp() {
  // Sélectionnez l'élément racine du DOM où votre application sera rendue
  const rootElement = document.getElementById("root"); // Obtenez l'élément avec l'ID "root" du DOM
  const root = createRoot(rootElement); // Créez un point d'entrée racine pour votre application

  // Rendre l'application dans le DOM
  root.render(
    // Utilisez React DOM pour rendre votre application dans l'élément racine
    <Provider store={store}>
      {/* Utilisez le composant Provider de Redux pour fournir le magasin à votre application */}
      <BrowserRouter>
        {/* Utilisez le composant BrowserRouter pour gérer la navigation */}
        <App />
        {/* Rendez le composant principal de votre application (App) */}
      </BrowserRouter>
    </Provider>
  );
}

// Appelez la fonction d'initialisation
initializeApp(); // Initialisez et lancez votre application
