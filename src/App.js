import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var array = [];
var n = 0;

var current = "none";

function openDiv(event, div) {
  //var hiddenDiv = document.getElementById(div);
  //console.log(div);
  //console.log(document.getElementById("hidden2").style.display);
  /*if (div !== "hidden1" && document.getElementById("hidden1").style.display === "flex") {
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
  } */

  if (current === "none"){ //base case: first click
    console.log("1");

    var hiddenDiv = document.getElementById(div);
    hiddenDiv.style.display = "flex";
    current = div;
  }
  else if(current !== div){ //case: user clicked something different
    console.log("2");
    var prevDiv = document.getElementById(current);
    prevDiv.style.display = "none";
    var hiddenDiv = document.getElementById(div);
    hiddenDiv.style.display = "flex";
    current = div;
  }
  else if (current === div && document.getElementById(div).style.display === "flex"){ //case: user clicked same item while it was up
    document.getElementById(div).style.display = "none";
  } 
  else{ //case: user clicked same option while it was down
    document.getElementById(div).style.display = "flex";
  }
}

function addArray(event, obj) {
  //console.log(obj);
  array[n] = obj;
  n++;
  console.log(array);
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p onClick={(e) => openDiv(e, "hidden1")}> East Asian</p>
          </div>
          <div className="col-4">
            <p onClick={(e) => openDiv(e, "hidden2")}> European </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => openDiv(e, "hidden3")} > South East Asian </p>
          </div>
        </div>

        <div className="row" id="hidden1">
          <div className="col-4" >
            <p onClick={(e) => addArray(e, "Taiwanese")}> Taiwanese </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Chinese")}> Chinese </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Korean")}> Korean </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Japanese")}> Japanese </p>
          </div>
        </div>

        <div className="row" id="hidden2">
          <div className="col-4">
            <p onClick={(e) => addArray(e, "British")}> British </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "French")}> French </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "German")}> German </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Mediterranean")}> Mediterranean </p>
          </div>
        </div>

        <div className="row" id="hidden3">
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Vietnamese")}> Vietnamese </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Filipino")}> Filipino </p>
          </div>
          <div className="col-4">
            <p onClick={(e) => addArray(e, "Thai")}> Thai </p>
          </div>
        </div>

        <div className="form-row text-center">
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
