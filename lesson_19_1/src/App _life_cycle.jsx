import React, { Component } from 'react';


class App_life_cycle extends Component {
  constructor(){
    this.state = {}
  }

  componentWillMount(){
    this.setState()
  }

  render() {
    return (
      <div >       
      
          <h1>f</h1>
      
      </div>
    );
  }

  componentDidMount(){
    if(){
      this.setState()
    }
  }

  componentWillReceiveProps(newProps){
    this.props ={}
  }

  shouldComponentUpdate(){
    return true; //если что то могло поменяться, то надо true - значение по умолчанию
    return false; //не надо делать проверки , ничего не менялось
  }
 //если shouldComponentUpdate(return true;){}, То вызывается след метод

 componentWillUpdate(){}
 render(){}// новая копия объекта для сравнения

 componentDidUpdate() {}


 componentWillUnmount(){} //удаление компонента со страницы

}


export default App_life_cycle;
