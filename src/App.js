import './App.css';
import React from 'react';
import Home from './pages/Home';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home />
      </HashRouter>
    </div>
  );
}

export default App;
