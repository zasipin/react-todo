var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
import TodoApi from 'TodoApi';
import Login from 'Login';

import * as actions from 'actions';
import {configure} from 'configureStore';

// import './../playground/firebase/index';

var store = configure();

// store.subscribe(()=>{
//   console.log('New state', store.getState());
// });

// store.dispatch(actions.addTodo('Walk'));
// store.dispatch(actions.setSearchText('ssser'));
// store.dispatch(actions.toggleShowCompleted());

// var initialTodos = TodoApi.getTodos();
// store.dispatch(avtions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">        
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
        <Route path="*" component={Login} />        
      </Route>
    </Router>
  </Provider>  
  ,
  document.getElementById('app')
);
