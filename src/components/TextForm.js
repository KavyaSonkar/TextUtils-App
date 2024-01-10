import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked' + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Text has been capitalised','success');
    }

    const handleLoClick = ()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Text has been lowercased','success');
    }

    const handleClearClick = ()=>{
      let newText="";
      setText(newText);
      props.showAlert('text cleared','success');
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert('Speaking now','success');
    }

    const speakstop = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent == "Speak") {
          toogle.innerHTML = "Stop"
          props.showAlert('Speaking now','success');
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML = "Speak"){
              window.speechSynthesis.cancel()
              props.showAlert('stop','success');
          }
      }
  }

    const handleReverse = (event) => {
      /* Convert string to array*/
      let strArr = text.split("");
      /* Reverse array*/
      strArr = strArr.reverse();
      /* Convert array to string*/
      let newText = strArr.join("");
      setText(newText);
    };
 
    const reversed = () => {
      let splitWord = text.split("");
      let reverseWord = splitWord.reverse("");
      let joinedWords = reverseWord.join("");
      let newText = joinedWords
      setText(newText);
      props.showAlert('text reversed','success');
    };


    const handleOnChange = (event)=>{
        //console.log('on change');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //setText('new text');
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-1">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='light'?'gray':'white'}}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleAltClick}>Alternate text</button> */}
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button type="submit" onClick={speakstop} className="btn btn-warning mx-2 my-2" id="toggle">Speak stop</button>
        <button type="submit" onClick={handleReverse} className="btn btn-warning mx-2 my-2">Reverse</button>
        <button type="submit" onClick={reversed} className="btn btn-warning mx-2 my-2">reverse2</button>
    </div>

    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
     <h3>your text summary</h3>  
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.08 * text.split(" ").length} minutes read</p>
     <h3>Preview</h3>
     <p>{text.length>0?text:'Enter something in textbox above to preview it here'}</p>
    </div>
    </>
    
  )
}
