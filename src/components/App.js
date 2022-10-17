import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  
  const shoot = () => {
    document.getElementById("para").innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  }
  return (
    
    <div id="main">
    <p id="para"></p>
    <button id="click" onClick={shoot}>on click</button>
 
    </div>
   

  );


 

}


export default App;
