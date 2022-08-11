import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import ProfilesMain from './profiles/ProfilesMain'

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
        <Route path="/test" element={<Test/>} />
        <Route path="/Main">
          <Route index element={<Main/>} />         
        </Route>
        <Route path="/ProfilesMain" element={<ProfilesMain />} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;