import React, { Component } from 'react';
import './App.css';

class Translator extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

   ajax_xhr = () => {
    const newString = document.getElementById('user').value;;
    const newLang = 'tamil';
    const data = `?inString${newString}&lang${newLang}`;
    let url = new XMLHttpRequest();
          url.open('GET', `http://146.148.85.67/processWordJSON${data}`);
    fetch(
        `http://146.148.85.67/processWordJSON${data}`,
        { method: 'GET' }
    ).then( response => {
        console.log('inside')
        response.json()
    } )
        .then( json => console.log(json) )
        .catch( error => console.error('error:', error) );

};

  render(){
    return(
      <div>
        Enter the text:
      <input type="text" name="text" id="user"/>
      Translated text:
      <input type="text" name="text"/>
      Select Your Language:<input list="hosting-plan" type="text"/>
    <datalist id="hosting-plan">
     <option value="Tamil"/>
     <option value="Hindi"/>
     <option value="Telgu"/>
    </datalist>
      </div>
    );
  }
}

export default Translator; 