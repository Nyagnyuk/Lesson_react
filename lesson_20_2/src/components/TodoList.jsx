import React from 'react';
import { Todo } from './Todo';

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

	changeTodoItem = (idx) => {
		let old = this.state.tasks;
		old[idx].completed = !old[idx].completed;

		this.setState ({
			tasks: old
		});
	}

	render(){
		let tasks = this.state.tasks.map(
		 				(obj, idx) => <Todo key={idx} id={idx} data={obj} askForUpdate={this.changeTodoItem}/>
		 				);
		 return (
		 		<ul>
		 		<h2>{this.state.tasks[1].completed.toString()}</h2>
		 			{ tasks }

		 		</ul>
		 			


		 	);
	}
}

