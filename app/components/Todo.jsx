import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import moment from 'moment';

export class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if (completed) {
        timestamp = completedAt;
        message = 'Completed ';
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm: a');
    }
    return (
      <div className={todoClassName} onClick={()=>{
         //this.props.onToggle(id);
         dispatch(actions.startToggleTodo(id, !completed))
         }}>
         <div>
           <input type="checkbox" checked={completed}/>
         </div>
         <div>
           <p>{text}</p>
           <p className="todo__subtext">{renderDate()}</p>
         </div>
      </div>
    )
  }
}

export default connect()(Todo);

// adds dispatch to this.props implicitly
// module.exports = connect()(Todo);

// export default function Todo ({id, text, completed}){
//   return (
//         <div className="todo" onClick={()=>{
//
//           }}>
//           <input type="checkbox" checked={completed}/>
//           {text}
//         </div>
//       )
// }
