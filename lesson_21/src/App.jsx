import React, { Component } from 'react';
import { TodoList } from './components/TodoList';

const Hello =() => <h1>Hello</h1>
const Bye =() => <h1>Bye</h1>

class App extends Component {
	constructor(props){
		super(props);
		this.state = {child: <Hello/>};
	}

	componentDidMount(){
		setTimeout(
			() => this.setState({child: <Bye/>}),3000
		);
	}

	render() {
	    return (
	    	<div className="container text-center">
	    		{this.state.child}
	      	</div>
	    );
	}
}

export default App;
