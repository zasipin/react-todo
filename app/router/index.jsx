var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import firebase from 'app/firebase';

import TodoApp from 'TodoApp';
import TodoApi from 'TodoApi';
import Login from 'Login';

function requireLogin(nextState, replace, next) {
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
}

function redirectIfLoggedIn(nextState, replace, next) {
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
}

export default (
    <Router history={hashHistory}>
      <Route path="/">        
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        <Route path="*" component={Login} />        
      </Route>
    </Router>
);