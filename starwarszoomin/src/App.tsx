import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../src/Components/Home/Home"
import TableOfContents from './Components/TableOfContents/TableOfContents';

function App() {
  return (
    <>
    <TableOfContents contents={[]}/>
      <Home contents={[]}/>
      </>
  )
    
  }
export default App;
