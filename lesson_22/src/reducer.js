
// export Function prepareState(info, appObject ){
// 	// if(info.type = 'CHANGE_USERS'){

// 	// }

// 	// appObject.setState({})
// }

// prepareState('CHANGE_NAME', id, name)
// prepareState('CHANGE_TWEET', author, body)
// prepareState('CHANGE_COMMENT', author, id, hidden, content)


export function dispatch( info, appObject ){
	// let state = Object.assign({}, app.state);

	let state = ( ..app.state); //получаем копию

	if( info.type === 'ADD_ITEM'){
		let currentLenght = app.state.items.length;
		state.items.push(currentLenght + 1)
		
	}else if (info.type === 'INC_COUNTER'){
		if(state.counter % 5){
			
		}
	}else{

	}

	app.setState(state);
}