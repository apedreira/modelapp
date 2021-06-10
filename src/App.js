
import './App.css';
import Navbar from './react-components/navbar'
import Plot from './react-components/plot'
import React from 'react';
import { plot } from 'plotly.js';
function App() {
  return (
    <div className="App">
<Navbar></Navbar>
<Plot></Plot>
    </div>
  );
}

export default App;
