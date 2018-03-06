import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container">       
      
          <Info message="Hi" />
      
      </div>
    );
  }
}

class Info extends Component{
  render(){
    return(
        <div>
          <h1>Info block:{this.props.message}</h1>
        </div>
      )
  }
}
export default App;
