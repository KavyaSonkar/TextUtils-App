import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

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
  <Navbar tittle='TextUtils' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>

  <div className='container my-3'>
  <TextForm showAlert={showAlert} heading='Enter your text to analyze' mode={mode}/>
  </div>
  </>
    );
}

export default App;
 