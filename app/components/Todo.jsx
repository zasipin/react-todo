import React from 'react';

export default class Todo extends React.Component {
  render() {
    var {id, text, completed} = this.props;
    return (
      <div className="todo" onClick={()=>{
         this.props.onToggle(id);
         }}>

         <input type="checkbox" checked={completed}/>
         {text}
       
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
