import React from 'react';
import { AddUser } from './AddUser';
import {dispatch} from '../reducer';


export const UserList = (props) => {
	let users = props.app.state.users.map(
			user => (
				<li 
					key={user.id}
					style={{color: user.id === -1? 'gray' : 'black'}}
					onClick = { () => dispatch(
						{type:'LOGIN_USER', name: user.name, pwd: user.pwd},
						props.app
					)}
					> 
					{user.name} [{user.pwd}]
				</li>
				)
		);
	 return (
	 	<div>
	 	<h3>User List:</h3>
	 		<ul>		 		
	 			{ users }
	 		</ul>
	 		
		</div>

		);
	}


