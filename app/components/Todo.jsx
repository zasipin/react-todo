import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <div className="todo" onClick={()=>{
         this.props.onToggle(id);
         }}>

         <input type="checkbox" checked={completed}/>
         {text}
         <p>{renderDate()}</p>
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
