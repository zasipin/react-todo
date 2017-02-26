import React from 'react';

export default class Todo extends React.Component {
  render() {
    var {id, text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}
