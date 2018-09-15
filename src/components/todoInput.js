import React from 'react';
import './todoInput.css';

export default class ToDoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
  };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput = (e) => {
    this.setState({value: e.target.value});
  }

  addTodo = (todo) => {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  addTask = (e) => {
    if (e.key === 'Enter') {
      if (this.state.value.length > 0) {
        this.props.addTodo(this.state.value);
        this.setState({value: ''});
      }
    }
  }

  render() {
    return (
      <div>
        <input placeholder="enter task" type="text" value={this.state.value} onKeyPress={(e)=>{this.addTask(e)}} onChange={this.handleInput}/>
        <button className="btn add-btn" onClick={() => this.addTodo(this.state.value)}>Add</button>
      </div>
    )
  }
}
