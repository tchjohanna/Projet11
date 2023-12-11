import React from 'react';
import styles from './UserPage.module.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const UserPage = () => {
    return (
        <div className={styles.userPage}>
            <nav className={styles.mainNav}>
                {/* ... Votre navigation ... */}
            </nav>

            <main className={`${styles.main} ${styles.bgDark}`}>
                <div className={styles.header}>
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className={styles.editButton}>Edit Name</button>
                </div>

                <section className={styles.account}>
                    {/* ... Contenu de la section du compte ... */}
                </section>

                {/* Répétez la section pour chaque compte si nécessaire */}
                
                {/* ... Autres sections ou composants ... */}
            </main>

            <footer className={styles.footer}>
                {/* ... Votre pied de page ... */}
            </footer>
        </div>
    );
};

export default UserPage;
