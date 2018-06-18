import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function openDiv(event, div) {
  var hiddenDiv = document.getElementById(div);
  console.log(div);
  console.log(document.getElementById("hidden2").style.display);
  if (div !== "hidden1" && document.getElementById("hidden1").style.display === "flex") {
    console.log("1");
    document.getElementById("hidden1").style.display = "none";
    hiddenDiv.style.display = "flex";
  }
  else if (div !== "hidden2" && document.getElementById("hidden2").style.display === "flex") {
    console.log("2");
    document.getElementById("hidden2").style.display = "none";
    hiddenDiv.style.display = "flex";
  }
  else if (hiddenDiv.style.display === "flex") {
    console.log("3");
    hiddenDiv.style.display = "none";
  }
  else {
    console.log("4");
    hiddenDiv.style.display = "flex";
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p onClick={(e) => openDiv(e, "hidden1")}> Apple</p>
          </div>
          <div className="col-4">
            <p onClick={(e) => openDiv(e, "hidden2")}> Banana </p>
          </div>
          <div className="col-4">
            <p> Cherry </p>
          </div>
        </div>
        <div className="row" id="hidden1">
          <div className="col-4">
            one
           </div>
          <div className="col-4">
            two
          </div>
          <div className="col-4">
            three
           </div>
          <div className="col-4">
            four
          </div>
          <div className="col-4">
            five
          </div>
        </div>
        <div className="row" id="hidden2">

          <div className="col-4">
            six
          </div>
          <div className="col-4">
            seven
           </div>
          <div className="col-4">
            eight
          </div>
          <div className="col-4">
            nine
          </div>
        </div>
        <div className="form-row text-center">
          <div className= "col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
