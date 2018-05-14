import React from 'react';
import {dispatch} from '../reducer';




// const saveUser = (name,pwd) =>
// 	appObject.userService
// 	.save(name.value, pwd.value)
// 	.then( isOk => isOk ? triggerUpdate() : alert('Error during save'))
// 	.then( () => name.value = '')
// 	.then( () => pwd.value = '');


export const AddUser = props =>{
	let name, pwd;
	return(
	<div>
		<input placeholder="username" ref={ el => name = el }/>
		<input placeholder="password" ref={ el => pwd = el }/>
		<hr/>
		<button 
			className="btn btn-success" 
			onClick={ () => dispatch(
				{ 
					type: 'SAVE_USER',
					 pwd: pwd.value,
					  name: name.value
					}, props.app)}>
			Save
		</button>
	</div>
);
};