import './header_module.scss';
import Logo from '../../assets/argentBankLogo.webp';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserBytoken,
  userSelector,
  clearState,
} from '../../features/UserSlices';

function Header() {
  // Récupération du token depuis le stockage local
  let token = localStorage.getItem('token');
  const navigate = useNavigate();

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  const dispatch = useDispatch();

  // Utilisation de useEffect pour charger les données de l'utilisateur lors du chargement du composant
  useEffect(() => {
    if (token != null) {
      dispatch(fetchUserBytoken({ token: token }));
    }
  }, [dispatch, token]);

  const { isError, username, firstName } = useSelector(userSelector);

  // Nettoyage des données du composant lorsqu'il est démonté
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  // Gestion des erreurs
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
  }, [isError, dispatch]);

  let menuLink;

  // Création des liens du menu en fonction de la présence ou de l'absence du token
  if (token != null) {
    menuLink = (
      <>
        <NavLink activeClassName='active' className='main-nav-item' to={'/user'}>
          <i className='fa fa-user-circle'></i>
          {username != null ? username : firstName}
        </NavLink>
        <Link className='main-nav-item' onClick={logout}>
          <i className='fa fa-sign-out'></i>
          Sign Out
        </Link>
      </>
    );
  } else {
    menuLink = (
      <NavLink activeClassName='active' className='main-nav-item' to={'/user'}>
  <i className='fa fa-user-circle-o'></i>
  {username != null ? username : firstName}
</NavLink>

    );
  }

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to={'/'}>
        <img
          className='main-nav-logo-image'
          src={Logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>{menuLink}</div>
    </nav>
  );
}

export default Header;
