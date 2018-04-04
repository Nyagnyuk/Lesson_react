import React from 'react';

export class Todo extends React.Component {
	constructor(props){
		super(props);
	}

	toggle = () => this.props.askForUpdate(this.props.id)
	remove = () => this.props.askForDelete(this.props.id)


	render(){
		return(
		<li		 
		 style={ {textDecoration: this.props.data.completed ? 'line-through' : 'none'} }>
			
			<span onClick={this.toggle}>{this.props.data.text}
			</span>
			<button onClick={this.remove}>X</button>
		</li>
		);
	}

}