import React from 'react';

const todo = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  addTodo = event => {
    const newTodo = {
      task: event,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
