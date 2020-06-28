import React, { Component } from "react";
import "./App.css";
import ReactCursorDiv from "./components/ReactCursorDiv";

class App extends Component {
  render() {
    return (
      <div>
        <ReactCursorDiv>This will follow the cursor!</ReactCursorDiv>
        <div
  onMouseMove={(e) => {
    e.stopPropagation();
    e.preventDefault();
  }}
  />
      </div>
    );
  }
}

export default App;
