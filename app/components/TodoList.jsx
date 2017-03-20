import React from 'react';
import {connect} from 'react-redux';
import Todo from 'Todo';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {
  render() {
    var {todos, showCompleted, searchText} = this.props;
    var that = this;
    var renderTodoList = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }

      return  TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return <Todo key={todo.id} {...todo} />//onToggle={(id) => that.props.onToggle(id)} />
      })
    }

    return (
      <div>
        {renderTodoList()}
      </div>
    )
  }
}

// module.exports

 export default connect((state)=>{
  return state;
  // return {
  //   todos: state.todos  // adds todos to this.props
  // };
})(TodoList);