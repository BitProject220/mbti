import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Signup from './sign/Signup';
import ContactMain from './Contact/ContactMain';
import LoginPage from './Login/LoginPage';
import Profiles from './profile/Profiles';
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
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;