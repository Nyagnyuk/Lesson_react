import React from 'react';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';

export class TodoList extends React.Component{
constructor(props){
	super(props);
	this.state = {
		tasks: [
			{text: 'hello', completed:false},
			{text: 'bye', completed:true},
		]
	};
}

// [a,b] [c] -> [a,b,c]
// [a,b].concat([c]) -> [a,b,c]

// x = [a,b]
// c
// x.push(c)
// x = [...x, c]
// [a,b, c]
addTask = text =>this.setState({
	tasks: [...this.state.tasks, {text: text, completed: false}]
})
	changeTodoItem = (idx) => {
		let old = this.state.tasks;
		// console.log(old, idx, old[idx])
		old[idx].completed = !old[idx].completed;

		this.setState ({
			tasks: old
		});
	}

	deleteTodoItem = (idx) => {//только те элементы, чьи индексы не равны idx
		let filtered = this.state.tasks.filter(
				(tasks, i) => idx !== i
			);
		
		this.setState ({
			tasks: filtered//новый state, в кот нет удаленного элемента
		});
	}

	render(){
		let tasks = this.state.tasks.map(
			(obj, idx) => <Todo key={idx} id={idx} data={obj}
								askForUpdate={this.changeTodoItem}
								askForDelete={this.deleteTodoItem}/>
			); 
		 return (
		 	<div>
		 		<ul>		 		
		 			{ tasks }
		 		</ul>
		 		<AddTodo onAddingTask={this.addTask}/>	
			</div>

		 	);
	}
}

