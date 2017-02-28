import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: 1, text: 'Walk the dog'},
        { id: 2, text: 'Clean the yard'},
        { id: 3, text: 'Call to bank'}
      ]
    }
  }

  handleAddButton(text){
    console.log(text);
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
        <AddTodo onAddButtonClick={(text) => this.handleAddButton(text)} />
      </div>
    );
  }
}
