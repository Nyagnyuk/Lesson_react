import React from 'react';
// import { UserService} from '../services/UserService';
import { appObject } from '../App';

function triggerUpdate(){
	appObject.pullUsers();
}



export const AddUser = props =>{
	let name, pwd;
	return(
	<div>
		<input placeholder="username" ref={ el => name = el }/>
		<input placeholder="password" ref={ el => pwd = el }/>
		<button 
			className="btn btn-success" 
			onClick={ () => appObject.userService.save(name.value, pwd.value).then( isOk => isOk ? triggerUpdate() : 0).then( () => name.value = '').then( () => pwd.value = '')}>
			Save
		</button>
	</div>
);
};