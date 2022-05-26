import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Dark Mode Enabled";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Light Mode Enabled";
    }
  };
  return (
    <>
      {/* <Router> */}
      {/*<Navbar title="Textutils" aboutText="About Textutils" />*/}
      <Alert alert={alert} />
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* users-->Component 1 
            users-->Component 2 */}
        {/* <Route exact path="/" element={<About />}></Route>
            <Route */}
        {/* exact
              path="/home"
              element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
            ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
