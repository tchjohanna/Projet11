import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiProvider from "../services/Api";
import { setUserName, selectFirstName, selectLastName, selectJWT, selectUserName } from '../store/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function UserProfile() {
  const dispatch = useDispatch();
  const [editInfo, setEditInfo] = useState(false);
  const [editedUserName, setEditedUserName] = useState("");
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const JWTtoken = useSelector(selectJWT);
  const userName = useSelector(selectUserName);
  console.log(userName)
  // Fonction pour gérer les changements de l'état editedFirstName
  const handleUsertNameChange = (e) => {
    const newValue = e.target.value;
    setEditedUserName(newValue);
    console.log("Nouvelle valeur de editedFirstName :", newValue);
  }


  async function handleChangeUserInfo() {
    if (!editedUserName.trim()) {
      alert("Merci de remplir votre nom et prénom");
      return;
    }

    await new ApiProvider().updateUserProfileData(
      editedUserName,
      JWTtoken
    );

    dispatch(setUserName(editedUserName));
    setEditInfo(false);
  }

  return (
    <div className="header">
      {!editInfo ? (
        <div className="header-user">
          <h1>Welcome back<br />{firstName} {lastName} !</h1>
        </div>
      ) : (
        <div className="header-user">
          <h1>Welcome back</h1>
          <div className="edit-container">
            <input
              className="change-zone"
              type="text"
              placeholder={userName}
              value={editedUserName}
              onChange={handleUsertNameChange} // Utilisation de la fonction de gestion du changement
            />
            <button
              className="edit-button"
              onClick={() => handleChangeUserInfo()}
            >
              Validate
            </button>
          </div>
        </div>
      )}
      <button className="edit-button" onClick={() => setEditInfo(!editInfo)}>
        {editInfo ? "Close edit" : "Edit name"}
        <FontAwesomeIcon icon={faTimes} className={editInfo ? "close" : ""} />
      </button>
    </div>
  );
}

export default UserProfile;
