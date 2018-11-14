import React from 'react';

const TodoItem = (props) => {
    const checkedClass = props.checked ? 'done' : '';
    const className = `todo-list__item ${checkedClass}`;

    return ( 
        <li key = {props.id}
                className = {className}
                onClick = { (ev) =>  { props.toggleTodo(ev) } } 
        >
            {props.name} 
            <span className="delete" onClick = { (ev) =>  { props.deleteTodo(ev) } }>x</span>
        </li>
    )
}

export default TodoItem;