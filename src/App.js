import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}


export default App;
