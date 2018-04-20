import React from 'react';
import {dispatch} from '../reducer';

export const DisplayData = (props) => {

	return(
		<div>
			<h3 onClick={ (type: 'INC_COUNTER') => dispatch( {}, props.app)  
		} >Counter: { props.app.state.counter }</h3>
			<h3 onClick={ (type: 'ADD_ITEM') => dispatch( {}, props.app) 
		} >Items: { props.app.state.items.join(',') }</h3>
		</div>
		)
}