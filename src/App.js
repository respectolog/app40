import logo from './logo.svg';
import './App.css';
import { MainForm } from "./components/MainForm/MainForm.js";
import { RegForm } from "./components/RegForm/RegForm.js";
import { ConfirmRegistration } from "./components/ConfirmReg/ConfirmReg.js";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


function Login() {
  return (
    <div className="App">
      <MainForm/>
    </div>
  );
}
function Registration() {
  return (
    <div className="App">
      <RegForm />
    </div>
  );
}
function ConfirmReg() {
  return (
    <div className="App">
      <ConfirmRegistration />
    </div>
  );
}


export default App;
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reg" element={<Registration />} />
        <Route path="confirm" element={<ConfirmReg />} />
      </Routes>
    </div>
  );
}
