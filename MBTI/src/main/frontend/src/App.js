import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import TestStart from './startTest/TestStart';
import Signup from './sign/Signup';
import ContactMain from './Contact/ContactMain';
import LoginPage from './Login/LoginPage';
import Profiles from './profile/Profiles';
import Test from './test/Test';
import KakaoRedirectHandler from './Login/KakaoRedirectHandler';
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
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/> 
        <Route path="/Profiles" element={<Profiles />} />
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