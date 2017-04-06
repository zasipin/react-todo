import React from 'react';
// import uuid from 'node-uuid';
// import moment from 'moment';
import * as Redux from 'react-redux';

import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

export class TodoApp extends React.Component{
  constructor(){
    super();
    // this.state = {
    //   showCompleted: false,
    //   searchText: '',
    //   todos: TodoApi.getTodos()
    // }
  }

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    
    dispatch(actions.startLogout());
  }

  render() {

    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={(e) => {this.onLogout(e)}}>Logout</a>
        </div>
        
        <h1 className="page-title">Todo App</h1>
        
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              {/*<TodoSearch onSearch={(showCompleted, searchText) => this.handleSearch(showCompleted, searchText)} />*/}
              <TodoSearch />
              <TodoList/>
              {/*<AddTodo onAddButtonClick={(text) => this.handleAddTodo(text)} />*/}
                <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(TodoApp);