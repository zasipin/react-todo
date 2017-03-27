var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import {configure} from 'configureStore';

// import './../playground/firebase/index';

var store = configure();

store.subscribe(()=>{
  console.log('New state', store.getState());
});

// store.dispatch(actions.addTodo('Walk'));
// store.dispatch(actions.setSearchText('ssser'));
// store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>  
  ,
  document.getElementById('app')
);
