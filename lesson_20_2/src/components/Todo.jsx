import React from 'react';

exportclass Todo extends React.Component {
	constructor(props){
		super(props);

		// let data = props.data;
		// let text = data.text;
		// let completed = data.completed;


		let { data: {completed, text} } = props;
		this.state = {
			text,
			completed
		}
	}
	render(){

	}

}