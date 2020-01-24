import React, { Component } from 'react';
import './App.css';

class Translator extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

   async ajaxcall() 
{
  let response = await fetch(`http://146.148.85.67/processWordJSON?inString=#dyanamicword&lang=#langcode"`);
  let data = await response.json()
  .then((data) =>{
    this.setState({items: data.twords})
  })
  let dyanamicword = data[0].dyanamicword;

}

  render(){
    return(
      <div>
        Enter the text:
      <input type="text" name="text"/>
      Translated text:
      <input type="text" name="text"/>
      <input list="hosting-plan" type="text"/>
    <datalist id="hosting-plan">
     <option value="small"/>
     <option value="medium"/>
     <option value="large"/>
    </datalist>
      </div>
    );
  }
}

export default Translator; 