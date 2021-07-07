import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoText !== "") {
      this.props.addTodo(this.state.todoText);
      this.setState({
        todoText: ""
      });
    }
    // this.props.addTodo(this.state.todoText);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default TodoForm;
