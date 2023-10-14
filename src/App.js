// src/App.js

import React from 'react';
import ColorPicker from './Colorpicker';
import './App.css';

function App() {
  const colors = ['#fee327','#fdca54','#f6a570','#f1969b','#f08ab1','#c78dbd','#927db6','#5da0d7','#00b3e1','#50bcbf','#65bda5','#87bf54','#e1f7d5','#f1cbff','#a8e6cf'];

  return (
    <div className="App">
       <br />
       <br />
       <br />
        <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
