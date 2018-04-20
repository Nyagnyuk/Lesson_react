
// export Function prepareState(info, appObject ){
// 	// if(info.type = 'CHANGE_USERS'){

// 	// }

// 	// appObject.setState({})
// }

// prepareState('CHANGE_NAME', id, name)
// prepareState('CHANGE_TWEET', author, body)
// prepareState('CHANGE_COMMENT', author, id, hidden, content)


export function dispatch( info, app ){
	// let state = Object.assign({}, app.state);

	// let state = { ...app.state}; //получаем копию
	let state = {...app.state};
	// state.items = [ ...app.state.items];

	// let state = { };
	// state.counter = app.state.counter;
	// state.items = [];
	// state.items[0] = app.state.items[0]

	if( info.type === 'ADD_ITEM'){
		let currentLenght = app.state.items.length;
		// state.items.push(currentLenght + 1)

		let value = currentLenght + 1;
		state.items = [...state.items, value];
		
	}else if (info.type === 'INC_COUNTER'){
		if((state.counter+1) % 5){ //если не кратное 5
			// state.counter++;
			state = {...state};//получили копию, потом изменяем
			state.counter++;
		}else{
			state = {...state};
			state.counter +=2;
		}
	}else{
 
	}

	app.setState(state);
}