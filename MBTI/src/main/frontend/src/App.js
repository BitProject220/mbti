import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Profiles from './profile/Profiles';

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
        <Route path="/Main">
          <Route index element={<Main/>} />
        </Route>
        <Route path="/Profiles" element={<Profiles />} />
      </Routes>
      </>
    </BrowserRouter>

  )
  
};

export default App;