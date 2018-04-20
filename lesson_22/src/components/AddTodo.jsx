import React from 'react';

export const AddTodo = props =>{
	let inp;
	return(
	<div>
		// <input/>нет state, поэтому value не добавляем
		<input ref={ el => inp = el }/>
		<button className="btn btn-success" onClick={() => {props.onAddingTask(inp.value); inp.value = '';}}>Add</button>
	</div>
);
};