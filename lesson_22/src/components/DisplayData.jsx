import React from 'react';
import {dispatch} from '../reducer';

export const DisplayData = (props) => {

	return(
		<div>
			<span onClick={ () => dispatch( {type: 'INC_COUNTER'}, props.app)  
		} 
				onContextMenu={ () => dispatch({type: 'DEC_COUNTER'},props.app)}
		>Counter: { props.app.state.counter }</span>
			<span onClick={ () => dispatch( {type: 'ADD_ITEM'}, props.app) 
		} >Items: { props.app.state.items.join(',') }</span>
		</div>
		)
}