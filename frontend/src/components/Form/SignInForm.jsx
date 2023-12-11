import React from 'react';
import styles from './SignInForm.module.css';

function SignInForm() {
    return (
        <section className={styles.signInContent}>
            <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
            <h1>Sign In</h1>
            <form>
                <div className={styles.inputWrapper}>
                    <label htmlFor="username" className={styles.inputWrapperLabel}>Username</label>
                    <input type="text" id="username" className={styles.inputWrapperInput} />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password" className={styles.inputWrapperLabel}>Password</label>
                    <input type="password" id="password" className={styles.inputWrapperInput} />
                </div>
                <div className={styles.inputRemember}>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me" className={styles.inputRememberLabel}>Remember me</label>
                </div>
                <button className={styles.signInButton} type="submit">Sign In</button>
            </form>
        </section>
    );
}

export default SignInForm;
