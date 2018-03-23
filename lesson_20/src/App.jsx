import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.names = ['Oleg', 'Alex', 'Genya', 'Max'];
  }

  generateList(){
    return this.names.map(
        item => <i key={item}>{item}</i>
      );
  }
  render() {
    let a = <del key="1">1</del>;
    let b = <mark key="2">2</mark>;
    let c = <del key="1">hi</del>;
    let d = <mark key="2">by</mark>;
    let ch = [a,b,];
    let ch2 = [c,d,];

    let data = [1,2,3,4,5,6,];
    let str = data.map( item => <p key={item}>{item}</p>);//если только item- явл уникальными, не повторяются  
    let data_2 = [1,2,3,4,5,6,5];
    let str_2 = data_2.map( (item, i) => <span key={i} propsKey={i}>{item}</span>)//использование второго аргумента в ф-ции map - индекса

    return (
      <div className="container">
      <h1>Генерация списка через массив</h1>
        {ch}
        {ch2}

        {str}
        {str_2}

        {data_2.map( 
            (item, i) =>
               <h4 key={i} propsKey={i}>{item}</h4>)}



        {
          ['Vasy', 'Petr', 'Katya'].map(
              item => <h2 key={item}>{item}</h2>
            )
        }

        { this.generateList() }
      </div>
    );
  }
}

export default App;
