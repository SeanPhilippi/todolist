// onclick event listener pointed to removeItem() function
// button for each item with x label for delete functions
// capture the id to know what item to delete from list array

// user has to add items using input text
// show user the updated list
// user crosses out items on list
// user can delete items from list

import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // property containing array of task objects
      todos: [],
      // property containing id for next added task that is incremented when
      // addTodo() is called
      id: 0
    }
  }
  // passing todoText as a property
  // using arrow function to bind context of 'this' as function gets passed around
  addTodo = (todoText) => {
    let todos = this.state.todos;
    // with each call of addTodo function, increment this.state.id by 1 and assign to id
    let id = this.state.id + 1;
    // push new object to todos array with captured todoText assigned to text property
    // and new id set to id property
    todos.push({id: id, text: todoText});
    this.setState({
      todos: todos,
      id: id,
    })
  }

  removeTodo = (id) => {
    this.setState({
      // set todos property of the state to itself with the todo that removeTodo is called
      // on filtered out.  filter returns the array minus items that fail the test
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          {/*assigning prop todoText to "" and passing addTodo function to addTodo prop*/}
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
