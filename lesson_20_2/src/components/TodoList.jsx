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

	render(){
		let tasks = this.state.tasks.map(
		 				(obj, idx) => <Todo key={idx} data={obj}/>
		 				);
		 return (
		 		<ul>
		 			{ tasks }

		 		</ul>
		 			


		 	);
	}
}

