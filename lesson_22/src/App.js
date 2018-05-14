import React, { Component } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { UserService } from './services/UserService';
import { DisplayData } from './components/DisplayData';
import {dispatch} from './reducer';

export let appObject ;

class App extends Component {
	constructor(props){
		super(props);
		appObject = this;
		this.state = {
			users: [ ],
			counter: 0,
			items: [],
			currentUser: {name: 'Anonimus', pwd: null}
		};
		this.userService = new UserService();
	}
	pullUsers(){
		this.userService.getAll().then(
				users => this.setState({users: users})
			);
	}
	componentDidMount(){
		this.pullUsers();
	
	}
	
	render() {
	    return (
	    	<div className="container ">
	    	<h1 
	    	onClick={() => dispatch({type: 'LOGOUT_USER'}, this)}
	    	>Hello, {this.state.currentUser.name}</h1>
	    		<UserList app={this}/>
	    		{ !this.state.currentUser.pwd  && <AddUser app={this}/>}
	      	</div>
	    );
	}
}

export default App;
