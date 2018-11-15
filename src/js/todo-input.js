import React from 'react'

const TodoInput = (props) => {

    return (
        <input
            type="text"
            placeholder="Добавить новую задачу"
            className="form-control form-input"
            value={props.newTodoText}
            onChange={
                (ev) => {
                    props.handleInput(ev)
                }
            }
            onKeyDown={	
                (ev) => {
                    if(ev.keyCode === 13) {
                        props.addTodo();
                    }
                }
            }
        />
    )
}

export default TodoInput