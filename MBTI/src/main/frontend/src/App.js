import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import KakaoRedirectHandler from './Login/KakaoRedirectHandler';
import SignupMain from './sign/SignupMain';
import './css/reset.css';
<<<<<<< HEAD
import MbtiRelationships from './DetailApp/MbtiRelationships';
import Mbtiintrodusion from './DetailApp/Mbtiintrodusion';
import MbtiSW from './DetailApp/MbtiSW';
import Mbtifriendship from './DetailApp/Mbtifriendship';
import Mbticonclusion from './DetailApp/Mbticonclusion';
import Mbticareerpaths from './DetailApp/Mbticareerpaths';
import Mbtiparenthood from './DetailApp/Mbtiparenthood';
import Mbtiworkplacehabits from './DetailApp/Mbtiworkplacehabits';
=======
import MBTIDetail from './DetailApp/Detailpage/MBTIDetail';
import ContactMain from './Contact/ContactMain';
import KakaoRedirectHandler from './Login/KakaoRedirectHandler';
import LoginPage from './Login/LoginPage';
>>>>>>> 79e2cc8fb262e73dd6aa4373cd043cf4c8cb6c54


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
<<<<<<< HEAD

      <Route path="/Mbtiintrodusion" element={<Mbtiintrodusion id="1" /> } />
      <Route path="/MbtiSW" element={<MbtiSW id="1" /> } />
      <Route path="/MbtiRelationships" element={<MbtiRelationships id="1" />} />
      <Route path="/Mbtifriendship" element={<Mbtifriendship id="1" /> } />
      <Route path="/Mbtiparenthood" element={<Mbtiparenthood id="1" /> } />
      <Route path="/Mbticareerpaths" element={<Mbticareerpaths id="1" /> } />
      <Route path="/Mbtiworkplacehabits" element={<Mbtiworkplacehabits id="1" /> } />
      <Route path="/Mbticonclusion" element={<Mbticonclusion id="1" /> } />




=======
        <Route path="/signUp" element={<Signup /> } />
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/> 
        <Route path="/Profiles" element={<Profiles />} />
>>>>>>> 79e2cc8fb262e73dd6aa4373cd043cf4c8cb6c54
        <Route path="/signUp" element={<SignupMain /> } />
        <Route path="/" element={<Main/>} />
        <Route path="/ContactMain" element={<ContactMain/>}/>
        <Route path="/LoginPage" element={<LoginPage />}/>
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler />}/> 
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