import { UserService } from './services/UserService';

export function dispatch( info, app ){
	
	let state = {
		counter: maybeCounter(info, app.state.counter),
		items: maybeItems(info, app.state.items),
		users: maybeUsers(info, app.state.users),
		currentUser: maybeCurrentUser(info,app.state.currentUser)


	};

	app.setState(state);
}

function maybeCurrentUser(info, current){
	switch(info.type){
		case 'LOGIN_USER':
		let {name, pwd} = info;
		return {name:name, pwd: pwd};
		case 'LOGOUT_USER':
		return { name: 'Anonimous', pwd: null};

		default: return current;
	}
}

function maybeCounter(info, counter){
	let diff;
	switch(info.type){
		case 'INC_COUNTER':
			diff = (counter + 1) % 5 ? 1 : 2;
			return counter + diff;
			break;
		case 'DEC_COUNTER':
			diff = (counter - 1) % 5 ? 1 : 2;
			return counter - diff;
			break;	
		default:
			return counter;	
	}
}

function maybeItems(info, items){
	switch(info.type){
		case 'ADD_ITEM':
		let value = items.length + 1;
		return [...items, value];
			
			break;
		
		default:
			return items;	
	}
}

function maybeUsers(info, users){
	let service = new UserService();
	switch(info.type){		

			case 'SAVE_USER':
			let {pwd, name} = info;
			service.save(pwd,name);
			return [...users, {name:name, pwd:pwd, id: -1} ];

		default:
			return users;	
	}
}