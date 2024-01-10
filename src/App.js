import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
//const [alert, setalert] = useState(null);
const [mode, setMode] = useState('light');//weather dark mode is enabled or not
const toggleMode = () =>{
  if(mode ==='light'){
  setMode('dark')
  document.body.style.backgroundColor= 'gray';
}
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white';
  }
}

  return (
    <>
  {/* <Navbar tittle='Textkavya' AboutText="about us hai"/> */}
  <Navbar tittle='TextUtils' mode={mode} toggleMode={toggleMode}/>
  <Alert alert="this is an alert"/>

  <div className='container my-3'>
  <TextForm heading='Enter your text to analyze' mode={mode}/>
  </div>
  </>
    );
}

export default App;
 