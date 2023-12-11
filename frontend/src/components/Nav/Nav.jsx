import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png'; 
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.mainNav}>
            <Link to="/" className={styles.mainNavLogo}>
                <img
                    className={styles.mainNavLogoImage}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
            </Link>
            <div>
                <Link to="/sign-in" className={styles.mainNavItem}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
