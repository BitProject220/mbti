import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import TestStart from './startTest/TestStart';
import Signup from './sign/Signup';
import Test from './test/Test';
import SignupMain from './sign/SignupMain';
import './css/reset.css';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/signUp">Signup</Link></li>
        </ul>
      </nav> 
      
      <Routes>
        <Route path="/signUp" element={<SignupMain /> } />
        <Route path="/" element={<Main/>} />
        <Route index element={<Main/>} />         
        <Route path="/test" element={<Test/>} />

        <Route path="/Main">
          <Route index element={<Main/>} />
        <Route index element={<Main/>} />
        </Route>
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;