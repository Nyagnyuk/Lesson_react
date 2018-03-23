import React, { Component } from 'react';


class App_bool extends Component {
  constructor(props){
    super(props);
  }

 
  render() {
      let name = 'Gena';
      let loggedIn = true;
    // return (
    //   <div className="container">
    //   <h1>Boolean</h1>
    //    <h2>Hello {loggedIn && name}</h2>//усли false, то вернется просто Hello;если true -то имя
    //     <!--<h2>Bye { isLoggedIn ? 'User' : 'Anonimous'}</h2> //аналог if else
    //     <h2>Bye { isLoggedIn && 'User'}</h2> //анаог if-->
    //   </div>
    // );
    return(
      <div className="container"></div>

      );
  }
}

export default App_bool;
