import React, { useState, useEffect } from 'react';
import './App.css';
import "./bootstrap.css";

import AddBoxForm from "./components/AddBoxForm"
import Box from "./components/Box"

function App() {
  const [boxes, setBoxes] = useState([])

  // DATA PERSISTENCE TO LOCAL STORAGE >>>>>>
  useEffect( ()=>{
    const data = localStorage.getItem("boxes");
    if (data){
      setBoxes(JSON.parse(data))
    }
  }, []);

  useEffect( ()=>{
    localStorage.setItem("boxes", JSON.stringify(boxes))
  });
  // DATA PERSISTENCE TO LOCAL STORAGE >>>>>>


  return (
    <div className="App container">
      <AddBoxForm boxes={ boxes } setBoxes={ setBoxes }/>
      {boxes.map( (box, i)=>(
        <Box key={ i } box={ box }/>
      ))}
    </div>
  );
}

export default App;
