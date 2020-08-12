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
  apiKey: "AIzaSyDy74PfDOOy0D5QuMd6VGPWgpKhMigwgXE",
    authDomain: "chatty-app-293a6.firebaseapp.com",
    databaseURL: "https://chatty-app-293a6.firebaseio.com",
    projectId: "chatty-app-293a6",
    storageBucket: "chatty-app-293a6.appspot.com",
    messagingSenderId: "1072748362956",
    appId: "1:1072748362956:web:58523a6d89fa050a8f1669",
    measurementId: "G-S8G3QL4FRH"
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
