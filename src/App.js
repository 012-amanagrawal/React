import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
function App() {
  const [myMode, setmyMode]=useState('light');
  const changeMode=()=>
  {
    if(myMode==='light')
    {
      setmyMode("dark");
      document.body.style.backgroundColor='#042743';
      document.title="TextUtil-DarkMode";
    }
    else{
      setmyMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextUtil-LightMode";

    }
    
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtil" about="About TextUtil" mode={myMode} changeMode={changeMode} text={myMode==='light'?"Enable dark mode":"Enable light mode"}/>
           
        <div className="container my-3">
       <Routes>
       <Route path="/about" element={<About/>}/>
       <Route path="/" element={<TextForm heading="Lets Analyze The text" mode={myMode}/>}/>
      
      </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
