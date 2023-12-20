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
  let token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, username, firstName } = useSelector(userSelector);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserBytoken({ token }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
  }, [isError, dispatch]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  let menuLink = token ? (
    <>
      <NavLink
        className={({ isActive }) => isActive ? 'main-nav-item active' : 'main-nav-item'}
        to='/user'
      >
        <i className='fa fa-user-circle'></i>
        {username || firstName}
      </NavLink>
      <Link className='main-nav-item' onClick={logout}>
        <i className='fa fa-sign-out'></i>
        Sign Out
      </Link>
    </>
  ) : (
    <NavLink
      className={({ isActive }) => isActive ? 'main-nav-item active' : 'main-nav-item'}
      to='/user'
    >
      <i className='fa fa-user-circle-o'></i>
      {username || firstName}
    </NavLink>
  );

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img className='main-nav-logo-image' src={Logo} alt='Argent Bank Logo' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>{menuLink}</div>
    </nav>
  );
}

export default Header;
