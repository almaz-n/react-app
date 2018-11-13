import React from 'react';
import ReactDOM from 'react-dom';

//React-компонент функциональный
const Hello = () => {
	return ( 
		<h1> Hello, React </h1>
	)
}

// React-компонент при помощи class
class TodoApp extends React.Component {
	constructor() {
		super(); // конструктор из React.Component

		this.state = {
			todos: [{
					id: 1,
					name: 'Первая задача',
					checked: true
				},
				{
					id: 2,
					name: 'Вторая задача',
					checked: true
				},
				{
					id: 3,
					name: 'Третья задача',
					checked: false
				},
			],
			newTodoText: ''
		}
	}

	toggleTodo(key) {
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

	addTodo() {
		const todos = this.state.todos;
		let count = todos.length;

		todos.push({
			id: count++,
			name: this.state.newTodoText,
			checked: false
		});

		this.setState({
			todos,
			newTodoText: ''
		});
	}

	render() {
		return (
			<div> 
				<h1>Todo List</h1>
				<ol> {
					this.state.todos.map((todo) => {
						const className = todo.checked ? 'checked' : '';
						return ( 
							<li key = {todo.id}
									className = {className}
									onClick = {
										(e) => {
											this.toggleTodo(todo.id);
										}
									} 
							>
								{todo.name} 
							</li>
						)
					})
				} 
				</ol>

				<input
					type="text"
					placeholder="Добавить новую задачу"
					value={this.state.newTodoText}
					onChange={
						(e) => {
							this.setState({newTodoText: e.target.value})
						}
					}
					onKeyDown={	(e) => {
							if(e.keyCode === 13) {
								this.addTodo();
							}
						}
					}
				/>
			</div>
		)
	}
}


ReactDOM.render( 
	<TodoApp/> ,
	document.getElementById('root')
);