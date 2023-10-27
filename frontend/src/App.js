import React, { useState } from "react";
import "./styles/App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BugList from './components/BugList.js'
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h1>BUG TRACKER</h1>  
      <BugList/>
      <ToastContainer/>
    </div>
  );
}

export default App;
