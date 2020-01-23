import React, { Component } from 'react';
import './App.css';

class Translator extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch("http://146.148.85.67/processWordJSON?inString&lang")
    .then(res => res.json())
    .then((data) =>{
      this.setState({items: data.twords})
    })

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