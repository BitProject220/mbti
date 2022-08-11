import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import TestStart from './startTest/TestStart';

import Profiles from './profile/Profiles';
import Test from './test/Test';


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
        <Route path="/" element={<Main/>} />
        <Route index element={<Main/>} />         
        <Route path="/test" element={<Test/>} />
        <Route path="/TestStart" element={<TestStart/>} />
        <Route path="/Profiles" element={<Profiles />} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;