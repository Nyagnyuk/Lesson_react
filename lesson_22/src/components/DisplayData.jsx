import React from 'react';
import {dispatch} from '../reducer';

export const DisplayData = (props) => {

	return(
		<div>
			<h3 onClick={ () => dispatch( {type: 'INC_COUNTER'}, props.app)  
		} >Counter: { props.app.state.counter }</h3>
			<h3 onClick={ () => dispatch( {type: 'ADD_ITEM'}, props.app) 
		} >Items: { props.app.state.items.join(',') }</h3>
		</div>
		)
}