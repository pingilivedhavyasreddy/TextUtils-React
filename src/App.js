import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#031f3b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
  <>  
 
    <Navbar title="TextUtils"mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
          <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    
  </>
  );
}

export default App;
