import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render() {
    var {todos} = this.props;
    var that = this;
    var renderTodoList = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }

      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={(id) => that.props.onToggle(id)} />
      })
    }

    return (
      <div>
        {renderTodoList()}
      </div>
    )
  }
}
