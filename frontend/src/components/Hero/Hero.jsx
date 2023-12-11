import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.hero}>
            <section className={styles.heroContent}>
                <h2 className={styles.srOnly}>Promoted Content</h2>
                <p className={styles.subtitle}>No fees.</p>
                <p className={styles.subtitle}>No minimum deposit.</p>
                <p className={styles.subtitle}>High interest rates.</p>
                <p className={styles.text}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}

export default Hero;
