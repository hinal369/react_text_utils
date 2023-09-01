import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Convertcase", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowcase", "success");
    }

    const handleClearClick = (event) => {
        setText('');
        props.showAlert("Clear Text", "success");
    }
    const [text, setText] = useState("Enter the Text");
    return (
        <>
        <div className={`container my-3 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control ${props.mode === 'light' ? 'text-dark' : 'text-white'}`} style={{backgroundColor: props.mode === 'light' ? '#fff' : '#112947' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>        
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        </div>
        <div className={`container my-3 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
            <h3>Your Text Summary</h3>
            <p> {text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} Characters</p>
        </div>
        </>
    )
}
