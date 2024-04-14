import React, { useState } from 'react'
export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been capitalised', 'success');
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been lowercased', 'success');
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('text cleared', 'success');
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  //   props.showAlert('Speaking now', 'success');
  // }

  const speakstop = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop"
      props.showAlert('Speaking now', 'success');
    }
    else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML = "Speak") {
        window.speechSynthesis.cancel()
        props.showAlert('stop', 'success');
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

  // const reversed = () => {
  //   let splitWord = text.split("");
  //   let reverseWord = splitWord.reverse("");
  //   let joinedWords = reverseWord.join("");
  //   let newText = joinedWords
  //   setText(newText);
  //   props.showAlert('text reversed', 'success');
  // };


  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state


  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1 className='mb-5'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', color: props.mode === 'light' ? 'rgb(36 74 104)' : 'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={speak} >Speak</button> */}
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={speakstop} id="toggle">Speak/Stop</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverse} >Reverse</button>
        {/* <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={reversed} >Reverse2</button> */}
      </div>

      <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h3>Your summary text</h3>
        <p>{text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words and {text.length} characters</p>
        {/* <p>{text.split(' ').length} words and {text.length} characters</p> */}
        <p>{0.08 * text.split(" ").filter((element) => { return element.length != 0 }).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        {/* <p>{text.length > 0 ? text : 'Enter something in textbox above to preview it here'}</p> */}
      </div>
    </>

  )
}
