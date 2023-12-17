import ArgentBankIcon from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import {
    selectUserLogin,selectFirstName,
} from '../store/store';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logOut } from '../store/store'; // Assurez-vous de définir le chemin correct vers votre fichier store.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // Utilisation de useSelector pour récupérer des données du Redux store
  const connected = useSelector(selectUserLogin);
  
  const firstName = useSelector(selectFirstName);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  let handleLogOut = () => {
    dispatch(logOut()); // Dispatch de l'action de déconnexion
    navigate("/"); // Redirection vers la page d'accueil
  };

  return (
    <nav className="main-nav">
      {/* Lien vers la page d'accueil */}
      <Link to="/">
        <img src={ArgentBankIcon} alt='Logo Argent Bank' className='main-nav-logo'></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {/* Affichage conditionnel en fonction de la connexion */}
      {connected 
        ? (
          <div className='logged-container'>
            {/* Icône utilisateur */}
            <FontAwesomeIcon icon={ faUserCircle } className="icon-sign"/>  
            {/* Lien vers la page utilisateur avec le prénom de l'utilisateur */}
            <Link className='main-nav-item' to={"/user"}>{firstName}</Link>
            {/* Icône de déconnexion */}
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon"/>
            {/* Texte de déconnexion avec gestion de l'événement onClick */}
            <p className='main-nav-item' onClick={handleLogOut}>Sign out</p> 
          </div>
        ) 
        : (
          <div className='logged-container'>
            {/* Icône utilisateur */}
            <FontAwesomeIcon icon={ faUserCircle } className="icon-sign"/> 
            {/* Lien vers la page de connexion */}
            <Link className="main-nav-item" to={"/sign-in"}>
              Sign In
            </Link>
          </div>
        )
      }
    </nav>
  );
}

export default Header;
