import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  };


  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name='todo'
            id='todo'
            placeholder="Add new Todo"
            type="text"
            onChange={this.handleChanges}
          />

          <button>Submit</button>
        </div>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
