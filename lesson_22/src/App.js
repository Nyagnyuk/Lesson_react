import React, { Component } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { UserService } from './services/UserService';
import { DisplayData } from './components/DisplayData';

export let appObject ;

class App extends Component {
	constructor(props){
		super(props);
		appObject = this;
		this.state = {
			// users: [  ]
			counter: 0,
			items: [1,2]
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
	    		<DisplayData app={this}/>
	      	</div>
	    );
	}
}

export default App;
