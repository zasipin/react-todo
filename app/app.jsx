var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var {hashHistory} = require('react-router');

import firebase from 'app/firebase';

import * as actions from 'actions';
import {configure} from 'configureStore';
import router from 'app/router';

// import './../playground/firebase/index';

var store = configure();

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>  
  ,
  document.getElementById('app')
);
