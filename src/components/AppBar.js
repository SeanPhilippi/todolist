import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToDoInput from './components/todoInput.js'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default class ToDoInput extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       value: '',
//   };
//
//     this.handleInput = this.handleInput.bind(this);
//     this.addTodo = this.addTodo.bind(this);
//   }
//
//   handleInput(e) {
//     this.setState({value: e.target.value});
//   }
//
//   addTodo(todo) {
//     if (todo.length > 0) {
//       this.props.addTodo(todo);
//       this.setState({value: ''});
//     }
//
//   }
//
//   render() {
//     return (
//       <div>
//         <input placeholder="enter task" type="text" value={this.state.value} onChange={this.handleInput}/>
//         <button className="btn add-btn" onClick={() => this.addTodo(this.state.value)}>Add</button>
//       </div>
//     )

export default SimpleAppBar;
