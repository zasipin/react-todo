import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
         this.props.onToggle(id);
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
