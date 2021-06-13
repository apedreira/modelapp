
import './App.css';
import Navbar from './react-components/navbar'
import MyPlot from './react-components/plot'
import LogisticModel from './logisticModel'

import React from 'react';


function App() {
  return (
    <div className="App">
<Navbar></Navbar>
<div className="o-body-wrapper">
<MyPlot></MyPlot>
</div>

    </div>
  );
}

export default App;
