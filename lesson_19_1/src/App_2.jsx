import React, { Component } from 'react';


class App_2 extends Component {
  render() {
    return (
      <div className="container">       
      
          <Info qwe="qwe" message="AXxx" rtr="kdkd" atr="zzzzzzzz" adx="adx" />
          <Clickable otv= "onClick={ ()=>console.log('clicked') здесь нет события,это не приментится тк  этого элемента нет в браузере">
          	<h1>I am learn React</h1>
          </Clickable>
          <Clickableded reaction={()=> console.log('ddddd')}>
				<h2>asdfghjkl;</h2>
          </Clickableded>
          <Clickableded reaction={()=> console.log('hhhhhhhhhhhhhhhhhh')}>
				<h3>cccccccccccc</h3>
          </Clickableded>

          <Clickableded otv="сработает дефолтный клик  default reaction">
				<h3>default_reaction</h3>
          </Clickableded>
           <Clickableded reaction={ null} otv="перебиваем дефолтный " >
				<h3>null_</h3>
          </Clickableded>				
      </div>
    );
  }
}
class Clickableded extends Component{
	render(){
		return(
			<div onClick={this.props.reaction}>
				{this.props.children}
			</div>
		);
	}
}
class Clickable extends Component{

	render(){
		return(
				
				<div onClick={ ()=>console.log('clicked') }>
					{this.props.children}
				</div>
			);
	}
}

Clickableded.defaultProps = {
	reaction: () => console.log('default reaction')
}


function notification(mag){
	return function(){ //мы создали замыкание
		alert(mag);		
	};
}

class Info extends Component{
	constructor(props){
		super(props);
		this.clickExz = this.clickExz.bind(this);
	}
	clickExz(){//создали метод а потом (выше) в коснтрукторе его перебиндили
		alert(this.props.qwe);
	}
	clickVar(){
		alert(this.props.message);
	}
  render(){
  	let clickReaction = () => alert(this.props.adx);
    return(
    	<div>
    	
        <button onClick={notification(this.props.message)}>i</button> //работает, но не правильный вариант
        <br/>
        <button onClick={ (function(){alert(this.props.rtr); }).bind(this) }>yps</button>//работает, но не правильный вариант
        <br/>
        <button onClick={() => alert(this.props.atr)} >oxx</button>// стрелочные невозможно забиндить, они как бы уже забиндены, правильный вариант
        <br/>
        <button onClick={ clickReaction }>ax</button> //правильный вариант
        <br/>
        <button onClick={ this.clickVar }>opj</button> //есть проблема с this
        <br/>
        <button onClick={ this.clickExz }>rrrr</button> //есть проблема с this
      	</div>
      )
  }
}


export default App_2;
