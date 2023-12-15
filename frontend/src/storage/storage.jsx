// Fonction qui récupère une valeur depuis le stockage local (localStorage)
// Elle prend deux paramètres : la clé (key) à rechercher et une valeur par défaut (defaultValue) si la clé n'est pas trouvée
const getLocalStorage = (key, defaultValue) => {
  // Récupérer la valeur stockée dans le localStorage pour la clé spécifiée
  const storedValue = localStorage.getItem(key);

  // Si aucune valeur n'est trouvée dans le localStorage, retourner la valeur par défaut
  if (!storedValue) {
    return defaultValue;
  }

  // Si une valeur est trouvée dans le localStorage, la parse en tant qu'objet JSON
  return JSON.parse(storedValue);
};

// Exporter la fonction getLocalStorage pour qu'elle puisse être utilisée ailleurs
export default getLocalStorage;
