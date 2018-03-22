import React, {Component} from 'react';

class App_19_2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      val0:'hdhdh',
      val:'Default text',
      val1: 'ddddddddddd',
      valselect:"1"
      
    };
  }

  render(){
    let disabled4 = this.state.disabled4;
    return(
        <div className="cont">

          <input disabled={this.state.disabled1} /><br/>
          <input disabled={!this.state.disabled1} /><br/>
          <input  /><br/>
          <button onClick={ ()=>this.setState({disabled1: !this.state.disabled1})}>Change state</button>

          <br/><br/>
          <input disabled={this.state.disabled2}/><br/>
          <button onClick={ ()=>this.setState({disabled2: !this.state.disabled}) }>Change state2</button>

          <br/><br/>

          <input disabled={this.state.disabled3} /><br/>
          <input type="checkbox" onClick={ ()=>this.setState({disabled3: !this.state.disabled3}) } /> //не в стиле реакта
          
          <br/><br/>

          <input disabled={disabled4} /><br/>
          <input type="checkbox"
              checked={this.state.disabled4}
              onClick={()=>this.setState({disabled4: !disabled4})}  /> 

          <br/><br/>
          
          <input value="Some text" /> //  так мы никогда не изменим значени value в браузере
          <br/>
          <input value={this.state.val0}/> //так тоже пока не изменяется
          <br/>
          <input defaultValue="Some default text" />//значение по умолчанию и его можно изменить, но с т.зр. реакта это неконтролируемый
          <br/>
          <input value={this.state.val} onChange={ event => this.setState({val: event.target.value})}  />//onChange вызывается реактом каждый раз, когда мы пытаемся что то ввести в это поле
          <br/>

          <textarea value={this.state.val1} onChange={ event => this.setState({val1: event.target.value})}  />//ее содержимое, это то, что содержит value, в нативное у тексарии нет value, в реакте -есть
          <br/><br/>
          <h1>Current: { this.state.valselect}</h1>//у 2-го value будет =2,а не Second Text 
          <br/>
          <select value={this.state.valselect}
              onChange={ event => this.setState({valselect:event.target.value})}>
              
              <option>Default text</option> 
              <option value="2">Second Text</option>  
              <option>3rd Text</option> 


          </select>

        </div>
      );
  }
}
export default App_19_2;