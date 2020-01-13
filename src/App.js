import React from "react";
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todos = [];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newTodoList
    });
    console.log(newTodoList);
  };

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearComplete = () => {
    console.log("Clear Complete")
    this.setState({
      todos: this.state.todoList.filter(item => {
        return !item.complete;
      })
    })
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <h3>My Todos</h3>
        <TodoList todos={this.state.todoList} toggleItem={this.toggleItem} clearComplete={this.clearComplete} />
      </div>
    );
  }
}

export default App;
