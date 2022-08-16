import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import SignupMain from './sign/SignupMain';
import './css/reset.css';
import MBTIDetail from './DetailApp/Detailpage/MBTIDetail';


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
        </Route>

        <Route path="/MBTIDetail" element={<MBTIDetail /> } />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;