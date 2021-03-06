import React from 'react';
import TodoItem from './todo-item';
import TodoInput from './todo-input';

// React-компонент при помощи class
class TodoApp extends React.Component {
	constructor() {
		super(); // конструктор из React.Component

		this.state = {
			todos: [{
					id: 0,
					name: 'Первая задача',
					checked: true
				},
				{
					id: 1,
					name: 'Вторая задача',
					checked: true
				},
				{
					id: 2,
					name: 'Третья задача',
					checked: false
				},
			],
			newTodoText: ''
        }
        
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(ev) {
        const itemText = ev.target.value;

        this.setState({
            newTodoText: itemText
        });
    }

    // пометить как сделанная/несделанная задача
	toggleTodo(ev,key) {
        console.log(ev);
        if (ev.target.tagName == 'LI') {  
            const todos = this.state.todos.map((todo) => {
                if (todo.id === key) {
                    return {
                        id: todo.id,
                        name: todo.name,
                        checked: !todo.checked
                    }
                } else {
                    return todo;
                }
            });

            this.setState({
                todos
            });
        }
    }

    // добавление задачи
	addTodo() {
        if(this.state.newTodoText !== '') {
            const todos = this.state.todos;
            let count = todos.length;
            let keepOn = true;  
            
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].name.trim() === this.state.newTodoText.trim()) {
                    keepOn = confirm('Уверены что хотите продублировать задачу?');        
                }
            }

            if(keepOn) {
                todos.push({
                    id: count++,
                    name: this.state.newTodoText,
                    checked: false
                });   
            }

            this.setState({
                todos,
                newTodoText: ''
            });
           
        } else {
            alert('поле является обязательным! вы ввели пустое значение');
        }		
    }
    
    // удаление задачи
    deleteTodo(ev,key) {
        if (ev.target.tagName == 'SPAN') {   
            const todos = this.state.todos.filter((todo) => {
                return todo.id != key;
            });

            this.setState({
                todos
            });
        }        
    }

	render() {
		return (		
            <div className="todo">
                <h1>Todo List</h1>
                
                <TodoInput
                    newTodoText={this.state.newTodoText}
                    addTodo={this.addTodo}
                    handleInput={this.handleInput}
                />
                
                <ol className="todo-list"> {
                    this.state.todos.map((todo) => {
                        return(
                            <TodoItem
                                id={todo.id}
                                name={todo.name}
                                checked={todo.checked}
                                toggleTodo={this.toggleTodo} //?
                                deleteTodo={this.deleteTodo}
                            />
                        )
                    })
                } 
                </ol>						
            </div>	
		)
	}
}

export default TodoApp;