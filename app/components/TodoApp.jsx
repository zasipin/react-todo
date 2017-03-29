import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

export default class TodoApp extends React.Component{
  constructor(){
    super();
    // this.state = {
    //   showCompleted: false,
    //   searchText: '',
    //   todos: TodoApi.getTodos()
    // }
  }

  // handleToggle(id){
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if(todo.id === id)
  //     {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });

  //   this.setState({todos: updatedTodos});
  // }

  // componentDidUpdate(){
  //   // TodoApi.setTodos(this.state.todos);
  // }

  // handleAddTodo(text){
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // }

  // handleSearch(showCompleted, searchText){
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   })
  // }

  render() {
    // var {todos, showCompleted, searchText} = this.state;
    // var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
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
