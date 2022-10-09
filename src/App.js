import './App.css';
import React, { useState } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';


function App() {

const [boxColorArray, setBoxColorArray] = useState ([]);

  return (
    <div className="App">
   <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
   <Display boxColorArray={boxColorArray} />
    </div>
  );
}

export default App;
