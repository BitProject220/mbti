import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import TestStart from './startTest/TestStart';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <head>
        <ul>
          <li><Link to="/">Main</Link></li>
        </ul>
      </head> 
      
      <Routes>
      <Route path="/TestStart" element={<TestStart/>} />
      <Route path="/" element={<Main/>} />
        <Route path="/Main">
        </Route>
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;