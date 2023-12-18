import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiProvider from "../services/Api";
import { updateUserData, selectFirstName, selectLastName, selectJWT } from '../store/store'; // Utilisez simplement "store" comme chemin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Mettez à jour l'import de l'icône

function EditUser() {
  const dispatch = useDispatch();

  // États pour gérer l'édition des informations utilisateur
  const [editInfo, setEditInfo] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  // Sélection des données utilisateur depuis Redux Store
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const JWTtoken = useSelector(selectJWT);

  // Fonction pour gérer la modification des informations utilisateur
  async function handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken) {
    // Vérification des champs vides
    if (!editedFirstName.trim() || !editedLastName.trim()) {
      alert("Merci de remplir votre nom et prénom");
      return;
    }

    // Appel de l'API pour mettre à jour les données utilisateur
    const response = await new ApiProvider().updateEditUserData(
      editedFirstName,
      editedLastName,
      JWTtoken
    );

    // Mise à jour des données utilisateur dans Redux Store
    dispatch(updateUserData(response.data.body));

    // Désactivation du mode d'édition
    setEditInfo(false);
  }

  return (
    <div className="header">
      {!editInfo ? (
        <div className="header-user">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
        </div>
      ) : (
        <div className="header-user">
          <h1>Welcome back</h1>
          <div className="edit-container">
            <input
              className="change-zone"
              type="text"
              placeholder={firstName}
              value={editedFirstName} // Utilisation de la valeur contrôlée
              onChange={(e) => setEditedFirstName(e.target.value)}
            />
            <input
              className="change-zone change-lastname"
              type="text"
              placeholder={lastName}
              value={editedLastName} // Utilisation de la valeur contrôlée
              onChange={(e) => setEditedLastName(e.target.value)}
            />
            <button
              className="edit-button"
              onClick={() =>
                handleChangeUserInfo(editedFirstName, editedLastName, JWTtoken)
              }
            >
              Validate
            </button>
          </div>
        </div>
      )}

      {editInfo ? (
        <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
          Close edit
          <FontAwesomeIcon icon={faTimes} className="close" />{/* Utilisation de l'icône correcte */}
        </button>
      ) : (
        <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
          Edit name
        </button>
      )}
    </div>
  );
}

export default EditUser;
