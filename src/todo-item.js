import React from 'react';

const TodoItem = (props) => {
    const className = props.checked ? 'checked' : '';
    return ( 
        <li key = {props.id}
                className = {className}
                onClick = { props.toggleTodo } 
        >
            {props.name} 
        </li>
    )
}

export default TodoItem;