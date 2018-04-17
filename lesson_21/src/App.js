import React, { Component } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { UserService } from './services/UserService';

export let appObject ;

class App extends Component {
	constructor(props){
		super(props);
		appObject = this;
		this.state = {
			users: [  ]
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
		// let req =  new XMLHttpRequest();
		// req.open('GET', 'http://localhost:8000/user')

		// this.userService.getAll().then(
		// 		users => this.setState({users: users})
		// 	);
	}
	
	render() {
	    return (
	    	<div className="container ">
	    		
	    		<UserList users={this.state.users} />
	    		<AddUser userService={this.userService} />
	      	</div>
	    );
	}
}

export default App;
