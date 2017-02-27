import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {
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

  render() {
    var {todos} = this.state;
    return (
      <div>
        TodoApp component
        <TodoList todos={todos} />
        <AddTodo onAddButtonClick={(text) => this.handleAddButton(text)} />
      </div>
    );
  }
}
