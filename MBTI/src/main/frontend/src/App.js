import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import ProfilesMain from './profiles/ProfilesMain';
import MBTIDetail from './DetailApp/Detailpage/MBTIDetail';

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
        <Route path="/Main">
          <Route index element={<Main/>} />
        </Route>
        <Route path="/ProfilesMain" element={<ProfilesMain />} />
        <Route path="/MBTIDetail" element={<MBTIDetail /> } />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;