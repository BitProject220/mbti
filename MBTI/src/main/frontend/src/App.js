import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Signup from './sign/Signup';
import Test from './test/Test';

const App = () => {
  return (
    <BrowserRouter>
      <>
      <head>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/signUp">Signup</Link></li>
        </ul>
      </head> 
      
      <Routes>
        <Route path="/signUp" element={<Signup /> } />
        <Route path="/" element={<Main/>} />
        <Route index element={<Main/>} />         
        <Route path="/test" element={<Test/>} />
        <Route path="/Main">
        <Route index element={<Main/>} />
        </Route>
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;