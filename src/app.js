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
			]
		}
	}

	toggleTodo(key) {
		const todos = this.state.todos.map((todo) => {
			if (todo.id === key) {
				return {
					id: todo.id,
					name: todo.name,
					checked: !todo.ckecked
				}
			} else {
				return todo;
			}
		});

		this.setState({
			todos
		});
	}

	render() {
		return ( 
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
		)
	}
}


ReactDOM.render( 
	<TodoApp/> ,
	document.getElementById('root')
);