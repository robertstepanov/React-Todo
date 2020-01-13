// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item';

const TodoList = props => {

    return (
        <div className="todo-list">
        {props.todos.map(item => (
            <Item key={item.id} item = {item} toggleItem={props.toggleItem} />
        ))}
        <button className="clear-btn" onClick={props.clearComplete}>Clear Completed</button>
    );
}

export default TodoList;