import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import Services from "./Components/Services";
import POrtfolio from "./Components/Portfolio";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
