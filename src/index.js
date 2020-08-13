import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './login/login';
import SignUp from './signup/signup';
import Dashboard from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');

//TODO: do not deploy with api key exposed!
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID ,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID 
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
    </div>
  </Router>
);

ReactDOM.render( routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
