import React, { useState } from 'react'; 
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');//weather dark mode is enabled or not
const [alert, setAlert] = useState(null);

const showAlert= (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);
}

const toggleMode = () =>{
  if(mode ==='light'){
  setMode('dark')
  document.body.style.backgroundColor= 'gray';
  showAlert('Dark mode has been enabled','success');
  document.title =  'TextUtils - Dark Mode';
  // setInterval(() => {
  //   document.title =  'TextUtils is amazing';
  // }, 2000);
  // setInterval(() => {
  //   document.title =  'Download now!!!';
  // }, 1500);
}
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white';
    showAlert('Light mode has been enabled','success');
    document.title =  'TextUtils - Light Mode';
  }
}

  return (
    <>
    {/* <Navbar tittle='Textkavya' AboutText="about us hai"/> */}
  {/* <Router> */}
  <Navbar tittle='TextUtils' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>

            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>

          </Routes> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
  {/* </Router> */}
  </>
    );
}

export default App;
 