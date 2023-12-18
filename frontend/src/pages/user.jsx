import { transactionData } from "../data/data";
import CarteDePaiement from "../components/CarteDePaiement";
import { useEffect } from "react";
import { selectJWT, selectUserLogin, setUserData } from '../store/store';
import { useDispatch, useSelector } from "react-redux";
import ApiCalls from "../services/Api";
import { Navigate } from "react-router-dom";
import EditUser from "../components/EditUser";

function UserPage() {
  let dispatch = useDispatch();
  let JWT = useSelector(selectJWT);
  const connected = useSelector(selectUserLogin);

  useEffect(() => {
    async function getUserProfile() {
      try {
        const api = new ApiCalls();
        const response = await api.getUserProfileData(JWT);
        dispatch(setUserData(response.data.body));
      } catch (error) {
        console.error("Erreur lors de la récupération du profil de l'utilisateur : ", error);
      }
    }

    if (JWT) {
      getUserProfile();
    }
  }, [JWT, dispatch]);

  if (connected === false || connected === undefined || connected === null) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main className="main bg-dark">
      <EditUser />
      <h2 className="sr-only">Accounts</h2>
      {transactionData.map(({ id, title, amount, description }) => (
        <CarteDePaiement key={id} title={title} amount={amount} description={description} />
      ))}
    </main>
  );
}

export default UserPage;
