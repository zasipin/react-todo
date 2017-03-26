import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{

  onSubmitHandler(e){
    e.preventDefault();
    
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      // this.props.onAddButtonClick(this.refs.todoText.value);
      dispatch(actions.startAddTodo(todoText));      
    } else {
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
      <div className="container__footer">
        <form onSubmit={(e)=> this.onSubmitHandler(e)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  // onAddButtonClick: React.PropTypes.func.isRequired
}

export default connect()(AddTodo);