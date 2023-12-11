import React from 'react';
import './User.module.css'; // Assurez-vous d'avoir un fichier CSS correspondant ou ajustez le chemin selon votre structure

const User = () => {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            {/* Répétez le bloc de la section pour chaque compte */}
            {/* ... autres sections de compte ... */}
        </main>
    );
}

export default User;
