import React, { Component } from 'react';//импортируем всю библиотеку и класссомпонент
import ReactDOM from 'react-dom';
const root = document.getElementById('root')

/**********************/

// let i=0;


// setInterval( () => {
// 	i +=1;

// 	let content = (
// 		<div>
// 			From loading: {i}
// 		</div> 
// 	)

// 	ReactDOM.render(content, root);
// },1000);



/**********************/
// let i = 0;
// let heading = ['hello', 'world', 'by'];

// let content = (
// 	<div>
// 		<h2 style={{color:'red'}}>{heading[0][0].toUpperCase()+heading[0].slice(1)}!!!</h2>
// 		<h2 style={{color:'green'}}>{heading[1][0].toUpperCase()+heading[1].slice(1)}!!!</h2>
// 		<h2 style={{color:'blue'}}>{heading[2][0].toUpperCase()+heading[2].slice(1)}!!!</h2>
// 	</div>
	 
// );


/**********************/

// function Heading(props){	
// }

// const Heading = function (props){}

// const Heading = (props) => {}

// const Heading = props => 'Hello' // вернеться значение после стрелок

// const Heading = props => {   //если нужно описать несколько действий то прописываем так
// 	return 'hfhf' + 'dghd';
// }

// const Heading = props => {
// 	let a = props.first;
// 	let b = 'world!!';
// 	// return a + b;
// 	// return <mark>a +b</mark>;  // a+b
// 	// return <mark> {a+b} </mark>; //hello world!!
// 	return(
// 		<h1>
// 			<mark>{a}</mark>
// 			<del>{b}</del>
// 		</h1>
// 	)
// }

// let content = (
// 	<div>
// 		<Heading />
// 		// {Heading()} //- так лучше не делать, выведет тоже самое
// 	</div>
// )


/**********************/

// class hoho{
// 	a(){

// 	}
// 	b(){

// 	}
// 	render(props){
// 		return <h1>{props.text}</h1>
// 	}
// }

// let o = new hoho(); //создаем новый объект
// o.a(); //вызов его метода а
// let Element = o.render; //элемент это ф-ция, кот принимает один элемент 

/**********************/


// class hoho {
// 	constructor(props){
// 		if(!props.text){
// 			props.text = 'default';
// 		}
// 		this.props = props;
// 	}
// 	upper(){
// 		this.props.text = this.props.text.toUpperCase();
// 	}
// 	render(props){
// 		return <h1>{this.props.text}</h1>
// 	}
// }
// let o = new hoho({text: 'some'});
// // o.upper();

// let Element = o.render.bind(o);//без bind работать не будет

// let content = (
// 	<div>
// 		<Element text='elem'/>
// 	</div>
// 	)


/**********************/

// class Heading extends React.Component {
// 	render(){ //НЕ ПРИНИМАЕТ АРГУМЕНТОВ И ДОЛЖЕНТ ЧТО ТО ВОЗВРАЩАТЬ!!!!
// 		return (
// 			// <h1>
// 			// 	'hello '
// 			// </h1>

// 			<h1>{this.props.text}</h1>
// 			);
// 	}
// }


// let content = (
// 	<div>
// 		<Heading text='hhhf'/>
// 		<Heading text='aaaaaaaaaaaaa'/>
// 	</div>

// 	)


/**********************/
let a = {
	name: 'Danya',
	age: 20
};
let b = {
	name: 'Vita',
	age: 25
};

// class Info extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 				<h1>{this.props.person.name}</h1>
// 				<h2>{this.props.person.age}</h2>
// 			</div>
// 			);
// 	}
// }

class Info extends React.Component{
	render(){
		let {name, age} = this.props.person;
		return (
			<div>
				<h1>{name}(<em>{age}</em>)</h1>
				<blockquote>{this.props.children}</blockquote>
			</div>
			);
	}
}

let content = (
	<div>
		<Info person={a}>some details</Info>
		<Info person={b}/>
		
	</div>

	)
ReactDOM.render(content, root);


