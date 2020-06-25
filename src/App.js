import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
