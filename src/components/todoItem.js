import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>
          <strong>&nbsp;X&nbsp;</strong>
        </button>
        <span>{this.props.todo.text}</span>
      </div>
    )
  }
}
