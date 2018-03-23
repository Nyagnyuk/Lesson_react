import React, { Component } from 'react';


class App_gener_tag extends Component {
  constructor(props){
    super(props); 
    this.state = {showHello: true};   
  }

  
  render() {   
    // return (
      // <div className="container">
      // <h1>Генерация с разными свойствами</h1>      
      // <h2 style={{color: 'red'}}>Hello</h2>
      // <h2 style={{color: 'green'}}>Bye</h2>
      // </div>
    // );

    // if(this.state.showHello){
    //   return( 
    //     <h1 
    //   onClick={()=>this.setState({showHello: !this.state.showHello})}
    //    style={{color:'red'}}>Hello</h1>
    //    );
    // }else{
    //    return( <h1 
    //   onClick={()=>this.setState({showHello: !this.state.showHello})}
    //    style={{color:'green'}}>Bye</h1>
    //    );
    // }

    let text = 'Bye';
    let color = 'green';
    if(this.state.showHello){
      text = 'Hello';
      color = 'red';
    }
     return( 
        <h1 
      onClick={()=>this.setState({showHello: !this.state.showHello})}
       style={{color: color}}>{text}</h1>
       );
    
  }
}

export default App_gener_tag;
