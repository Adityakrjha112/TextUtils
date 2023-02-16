import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Inputtext from "./components/Inputtext";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Contact from './components/Contact';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Disable", "success");
    }
  };

  return (
    <>
    
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutUs="About"
      />
      <Alert alert={alert} />
        {/* <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/Alert" element={<Alert/>}/>
          <Route path="/" element={
            <div className="container my-4">
          <Inputtext
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlert}
            /></div>}/>
        </Routes> */}
        <div className="container my-4">
        <Routes>

        <Route exact path="/" element={<Inputtext
              heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
              mode={mode}
              showAlert={showAlert}
            />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode}/>}/>
          </Routes>
          </div>
            
    </>
  );
}

export default App;
