import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {{
    setAlert({
      message: message,
      type: type
    })

    setTimeout( () => {
      setAlert(null);
    }, 2000)
  }}
  const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#112947';
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
      }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert}/>} />             
          <Route exact path="/about" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
