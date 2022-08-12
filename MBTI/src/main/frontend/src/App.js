import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import ProfilesMain from './profiles/ProfilesMain';
import MBTIDetail from './DetailApp/Detailpage/MBTIDetail';
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
        <Route path="/" element={<Main/>} />
        <Route index element={<Main/>} />         
        <Route path="/test" element={<Test/>} />
        <Route path="/Main">
          <Route index element={<Main/>} />
        </Route>
        <Route path="/ProfilesMain" element={<ProfilesMain />} />
        <Route path="/MBTIDetail" element={<MBTIDetail /> } />
        <Route path="/signUp" element={<Signup /> } />
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/Profiles" element={<Profiles />} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;