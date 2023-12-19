import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import './utils/global-style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';
import { Provider } from 'react-redux'
import store from './utils/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          {/* Conditional render for the error page */}
          <Route path="*" render={(props) => {
            throw new Error('An unexpected error occurred.');
          }} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  </Provider>
);
