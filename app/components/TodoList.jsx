import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render() {
    var {todos} = this.props;
    var that = this;
    var renderTodoList = () => {
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
