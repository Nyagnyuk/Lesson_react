import React from 'react';
import { UserService} from '../services/UserService';


export const AddUser = props =>{
	let name, pwd;
	return(
	<div>
		<input placeholder="username" ref={ el => name = el }/>
		<input placeholder="password" ref={ el => pwd = el }/>
		<button className="btn btn-success" onClick={ () => props.userService.save(name.value, pwd.value)}>Save</button>
	</div>
);
};