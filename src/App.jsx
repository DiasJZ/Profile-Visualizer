import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Home } from './components/Home';
import { getUsersFromGitHub } from './services/api'


function App() {
  return (
    <div className="App">
      <Home />
       
    </div>
  );
}

export default App;
