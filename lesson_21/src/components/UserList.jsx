import React from 'react';
// import { Todo } from './Todo';
// import { AddTodo } from './AddTodo';

export class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {		
		};
	}



render(){
	let users = this.props.users;
	 return (
	 	<div>
	 	<h3>User List:</h3>
	 		<ul>		 		
	 			{ users.map( user => <li key={user.id}>{user.name}[{user.pwd}]</li>)}
	 		</ul>
	 		
		</div>

		);
	}
}

