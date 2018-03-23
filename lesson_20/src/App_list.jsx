import React, { Component } from 'react';


class App_list extends Component {
  constructor(props){
    super(props);
   
  }

  render() {   
    return (
      <div className="container">
        <h1>Генерация списка</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App_list;
