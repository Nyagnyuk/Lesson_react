import React, { Component } from 'react';


class App extends Component {
  render() {
    return <MyComponent  name = 'Val'/>;
  }
}

// const func = () => console.log(1);

class MyComponent extends Component {
  constructor(props){
    super(props);
    this.state = {time: String(new Date)};   
   }


   componentDidMount(){ //как только компонент оседлает страницу запустить setInterval
      this.id = setInterval(
        () => this.setState({time: String(new Date)}),1000
        );
   }

   componentWillMount(){ //еще на странице, но его скоро не станет
      clearInterval (this.id);
   }
 

  render(){
    return(
        <h1>
          {this.state.time}
        </h1>
      )
  }

}





export default App;
