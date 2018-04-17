import React from 'react';
import { appObject } from '../App';


export const UserList = () => {
	let users = appObject.state.users;
	 return (
	 	<div>
	 	<h3>User List:</h3>
	 		<ul>		 		
	 			{ users.map( user => <li key={user.id}>{user.name}[{user.pwd}]</li>)}
	 		</ul>
	 		
		</div>

		);
	}


