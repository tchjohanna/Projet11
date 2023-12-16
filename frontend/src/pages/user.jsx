import { transactionData } from "../data/data";
import CarteDePaiement from "../components/CarteDePaiement";
import { useEffect } from "react";
import { selectJWT, selectUserLogin, setUserData } from '../store/store'; // Assurez-vous de définir le chemin correct vers votre fichier store.jsx
import { useDispatch, useSelector } from "react-redux";
import ApiCalls from "../services/Api";

import { Navigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";

function UserPage() {
  let dispatch = useDispatch();
  let JWT = useSelector(selectJWT);
  const connected = useSelector(selectUserLogin);

  // Utilisez useEffect pour effectuer une action lorsque le composant est monté ou lorsque JWT change.
  useEffect(() => {
    async function getUserProfile() {
      try {
        // Faites une requête pour récupérer les données du profil de l'utilisateur avec JWT.
        const response = await new ApiCalls().getUserProfileData(JWT);
        
        // Mettez à jour les données de l'utilisateur dans le store Redux.
        dispatch(setUserData(response.data.body));
        
      } catch (error) {
        console.error("Erreur lors de la récupération du profil de l'utilisateur : ", error);
        // Vous pouvez gérer les erreurs ici, par exemple, afficher un message à l'utilisateur.
      }
    }
    getUserProfile();
  }, [JWT, dispatch]);

  // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion.
  if (connected === false || connected === undefined || connected === null) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main className="main bg-dark">
      {/* Composant UserProfile pour afficher les informations de l'utilisateur */}
      <UserProfile />
      <h2 className="sr-only">Accounts</h2>
      {/* Mapping des transactions */}
      {transactionData.map(({ id, title, amount, description }) => {
        return (
          <CarteDePaiement key={id} title={title} amount={amount} description={description} />
        );
      })}
    </main>
  );
}

export default UserPage;
