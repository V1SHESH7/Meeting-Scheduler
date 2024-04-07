import React from "react";
import Navbar from "./Navbar";
import { PopupWidget } from "react-calendly";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <PopupWidget
    url="https://calendly.com/vishesh-kieser7/front-end-demo"
  
    rootElement={document.getElementById("root")}
    text="Click here to schedule!"
    textColor="#ffffff"
    color="#00a2ff"
  />
      
    </div>
  );
};

export default App;