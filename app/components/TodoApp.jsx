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
        { id: uuid(), text: 'Walk the dog', completed: false},
        { id: uuid(), text: 'Clean the yard', completed: true},
        { id: uuid(), text: 'Call to bank', completed: false}
      ]
    }
  }

  handleToggle(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) todo.completed = !todo.completed;

      return todo;
    });

    this.setState({todos: updatedTodos});
  }

  handleAddTodo(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
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
        <TodoList todos={todos} onToggle={(id) => this.handleToggle(id)} />
        <AddTodo onAddButtonClick={(text) => this.handleAddTodo(text)} />
      </div>
    );
  }
}
