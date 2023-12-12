import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store'; // Assurez-vous d'importer le store depuis le bon chemin
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/user" component={UserPage} />
          
          {/* Autres routes si nécessaire */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
 