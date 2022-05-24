import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const boldonClick = () => {
    console.log("Text bolded");
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");
  //setText("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={boldonClick}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
      </div>
    </>
  );
}
