import React from 'react'
import ReactDOM from 'react-dom';

class TodoList extends React.Component {

  render() {
    return (
        <input
            type="text"
            placeholder="Добавить новую задачу"
            className="form-control form-input"
            value={this.props.newTodoText}
            onChange={
                (ev) => {
                    this.props.handleInput(ev)
                }
            }
            onKeyDown={	
                (ev) => {
                    if(ev.keyCode === 13) {
                        this.props.addTodo();
                    }
                }
            }
        />
    )
  }
}

export default TodoList