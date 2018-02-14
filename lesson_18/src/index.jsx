// const h1 = document.getElementById('heading');

// h1.addEventListener('click', () => alert('hello app'));

//ниже две строки идентичны 
// const React = requre('react'); 
// import React from 'react';

import React, { Component } from 'react';//импортируем всю библиотеку и класссомпонент
import ReactDOM from 'react-dom';

// import { render } from 'react-dom';  - импортируем из библиотеки одну функцию

// const render = ReactDOM.render;
// const Component = React.Component;


// document.createElement('h1'); - внизу аналогичная запись на реакте

//можно так 
// let h1 = React.createElement('h1', {className: 'heading' , id:'heading'}, ['Hello']); //создание подобия тега h1
// let div = document.getElementById('root');
// ReactDOM.render(h1, div);

/**********************/

//можно так - это js код
// ReactDOM.render(
// 	React.createElement(
// 		'h1',
// 		 {className: 'heading' , id:'heading'},['Hello']
// 		),
// 		document.getElementById('root')
// );

// это jsx код

// ReactDOM.render(
// 	<h1 id="heading">Hdello</h1>,
// 	document.getElementById('root')
// );

/**********************/
//
// let h1;

// h1 = React.createElement(
// 	'h1', {id:'heding'}, ['FFFFF']
// );

/**********************/
//реакт код, бейбел - преобразовываетв реакт код
// let h1 = (
// 	<h1 id="heading">
// 		<em>RRR</em>
// 		<mark>ff</mark>
// 		<div>
// 			<ul>
// 				<li>1</li>
// 				<li>2</li>
// 			</ul>
// 		</div>
// 	</h1>
// );
/**********************/
// let person = {
// 	name: 'Tanya',
// 	age: 24,
// 	nale: 'dda'
// };

// let h1 = (
// 	<div>
// 		<h1>Name: {person.name}</h1>
// 		<h2>Age: {person.age}</h2>
// 		<h3>{getName(person)}</h3>
// 		<h4>{ person.name.split('').join('-')}</h4>
// 		<p>{person['nale']}</p>
		
// 	</div>
// )

// function getName(human){
// 	return human.nale;
// }

/**********************/
// const name = 'Anton';
// function handleClick(){
// 	alert('hfhfhf');
// }

// let h1=(
// 	<div>
// 		<h1 onClick={ handleClick}>hello, {name}</h1>
// 	</div>
// )

/**********************/

// class Person {
// 	constructor(details){
// 		this.name = details.name;
// 		this.age = details.age;
// 	}
// }
// let details = {
// 	name: "Asy",
// 	age: 12
// };
// let person = new Person(details);
// let h1=(
// 	<div>
// 		<h1>Name: {person.name}</h1>
// 		<h2>Age: {person.age}</h2>
// 	</div>
// )

/**********************/
function Person(props){
	// return 'ahaha';
	// return <span style={{color:'red'}}>'hghghgh'</span>;
	return (
			<div>
				<h1>Name: {props.name}</h1>
				<h2>Age: {props.age}</h2>
			</div>
		)

}

let h1 = (
	<div>
		<Person age="77"/>
		
		{Person ({name: 'Anton', age: 22})}
		<Person name="DDDDDD" age="55"/>
	</div>
)







ReactDOM.render(
	h1,
	document.getElementById('root')
);