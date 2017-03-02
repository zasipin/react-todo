import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Walk the dog'},
        { id: uuid(), text: 'Clean the yard'},
        { id: uuid(), text: 'Call to bank'}
      ]
    }
  }

  handleAddTodo(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    var {todos} = this.state;
    return (
      <div>
        TodoApp component
        <TodoSearch onSearch={(showCompleted, searchText) => this.handleSearch(showCompleted, searchText)} />
        <TodoList todos={todos} />
        <AddTodo onAddButtonClick={(text) => this.handleAddTodo(text)} />
      </div>
    );
  }
}
