import React from 'react';

const todos = [
  {
    name: 'Wash Dishes',
    id: 1121,
    purchased: false
  },

  {
    name: 'Wash Car',
    id: 1122,
    purchased: false
  },

  {
    name: 'Vacuum Bedrooms',
    id: 1123,
    purchased: false
  },

  {
    name: 'Hang Christmas Lights',
    id: 1124,
    purchased: false
  },

  {
    name: 'Buy Presents',
    id: 1125,
    purchased: false
  },

  {
    name: 'Decorate Christmas Tree',
    id: 1126,
    purchased: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

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
