import React from 'react';
import './User.module.css'; // Assurez-vous d'avoir un fichier CSS correspondant ou ajustez le chemin selon votre structure

const User = () => {
    const users = [
        {
            firstName: 'Steve',
            lastName: 'Rogers',
            email: 'steve@rogers.com',
            password: '********', // ne pas afficher le mot de passe directement
        },
        {
            firstName: 'Tony',
            lastName: 'Stark',
            email: 'tony@stark.com',
            password: '********', // ne  pas afficher le mot de passe directement
        },
    ];

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{users[0].firstName} {users[0].lastName}!</h1>
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
            

            {/* Section des informations de l'utilisateur 1 */}
            <section className="user-details">
                <h3>User Details</h3>
                <p><strong>First Name:</strong> {users[0].firstName}</p>
                <p><strong>Last Name:</strong> {users[0].lastName}</p>
                <p><strong>Email:</strong> {users[0].email}</p>
                <p><strong>Password:</strong> {users[0].password}</p>
            </section>

            {/* Section des informations de l'utilisateur 2 */}
            <section className="user-details">
                <h3>User Details</h3>
                <p><strong>First Name:</strong> {users[1].firstName}</p>
                <p><strong>Last Name:</strong> {users[1].lastName}</p>
                <p><strong>Email:</strong> {users[1].email}</p>
                <p><strong>Password:</strong> {users[1].password}</p>
            </section>
        </main>
    );
}

export default User;
