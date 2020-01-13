import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            name="item"
            value={this.state.todoText}
            onChange={this.handleChange}
            />
            <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;