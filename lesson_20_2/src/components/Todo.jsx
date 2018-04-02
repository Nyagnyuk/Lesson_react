import React from 'react';

export class Todo extends React.Component {
	constructor(props){
		super(props);

		// let data = props.data;
		// let text = data.text;
		// let completed = data.completed;


		// let { data: {completed, text} } = props;
		// this.state = {
		// 	text,
		// 	completed
		// }

		// this.state = {
		// 	// text: props.data.text,//текст неизменяемый поэтому нельзя хранить в state
		// 	completed: props.data.completed
		// };

		// this.toggle = this.toggle.bind(this)
	}

	// toggle(){
	// 	this.setState({completed: !this.state.completed})
	// }

	toggle = () => this.props.askForUpdate(this.props.id)


	render(){
		return(
		<li
		 onClick={this.toggle}
		 style={ {textDecoration: this.props.data.completed ? 'line-through' : 'none'} }>
			{this.props.data.text}
		</li>
		);
	}

}