import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assurez-vous que le chemin est correct
import './index.css'; // Si vous avez un fichier CSS global, sinon supprimez cette ligne

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
