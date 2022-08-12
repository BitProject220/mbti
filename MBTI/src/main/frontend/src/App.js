import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Signup from './sign/Signup';
import Test from './test/Test';


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
        <Route path="/signUp" element={<Signup /> } />
        <Route index element={<Main/>} />         
        <Route path="/test" element={<Test/>} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;