import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function openDiv(){
  console.log('success');
  var hiddenDiv = document.getElementById("hidden");
  console.log(hiddenDiv.style.display);
  if(hiddenDiv.style.display === "flex"){
    hiddenDiv.style.display = "none";
  }
  else{
    hiddenDiv.style.display = "flex";
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          Hello World!
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <p onClick={openDiv}> open</p>
          </div>
          <div className="col-4">
          Banana
          </div>
          <div className="col-4">
          Cherry
          </div>
        </div>
        <div className="row justify-content-start" id="hidden">
          <div className ="col-4">
            sesame
          </div>
        </div>
      </div>
    );
  }
}

export default App;
