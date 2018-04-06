import React, { Component } from 'react';
import { TodoList } from './components/TodoList';

const Hello =() => <h1>Hellooo</h1>
const Bye =() => <h1>Byeyyyy</h1>

class AddNext extends Component {
	constructor(props){
		super(props);
		this.state = {isGreetinggg: true};
	}

	componentDidMount(){
		setTimeout(
			() => this.setState({isGreetinggg: false}),2000
		);
	}

	render() {
	    return (
	    	<div className="container text-center">
	    		{this.state.isGreetinggg ? <Hello/> : <Bye/>}
	    		{Hello()}
	      	</div>
	    );
	}
}

export default AddNext;
