import React from 'react';
import './App.css';


function App() {
    window.onload = function(){
    const addElement = text => {
        // create a new div element
        var newDiv = document.createElement("div");
        // and give it some content
        var newContent = document.createTextNode(text);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    
        // add the newly created element and its content into the DOM
        suggestionContainer.appendChild(newDiv);
    };

    const removeElement = () => suggestionContainer.innerHTML = '';
    
    let timeout = null;
    let contentArea = document.querySelector('#description_textarea');
    let languageSelection = document.querySelector('#language_dropdown');
    let suggestionContainer = document.querySelector('.description_suggestion');
    
    contentArea.addEventListener('keyup', (e) => {
      const _elem = e.target || e.currentTarget;
      // PICK THE LAST WORD
      const clearArr = _elem.value.split(' ').filter(function(el) { return el; })
      const _val = clearArr[clearArr.length - 1];
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          removeElement();
          const params = `?inString=${_val}&lang=${getTextAreaValue()}`;
          ajax_xhr(params).then(res => {
              const opts = res.twords[0].options;
              if (opts.length) {
                  for(var i = 0; i < opts.length; i++) {
                      addElement(opts[i]);
                  }
              }
          }, err => console.log(err));
      }, 0);
    });

    
    // GET TEXTAREA VALUE
    const getTextAreaValue = () => languageSelection.options[languageSelection.selectedIndex].value.toLowerCase();

    async function ajax_xhr(str = '') {
        if (str === '') return;
        let response = await fetch(`http://146.148.85.67/processWordJSON${str}`,  { method: 'GET' })
        let data = await response.json();
        return data;
    };
}
  return (
    <div className="main_container">
        <fieldset>
            <legand>
                <label>Language:</label>
                <span className="language_dropdown_span">
                    <select id="language_dropdown" className="language_dropdown">
                        <option>Tamil</option>
                        <option>Telugu</option>
                        <option>Hindi</option>
                    </select>
                </span>
            </legand>
            <div className="description">
                <textarea id="description_textarea" placeholder="Type your content here"></textarea>
                <div className="description_suggestion"></div>
            </div>
        </fieldset>
    </div>
  );

}

export default App;
