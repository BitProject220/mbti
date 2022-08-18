import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Test from './test/Test';
import KakaoRedirectHandler from './Login/KakaoRedirectHandler';
import SignupMain from './sign/SignupMain';
import './css/reset.css';

import MbtiRelationships from './DetailApp/MbtiRelationships';
import Mbtiintrodusion from './DetailApp/Mbtiintrodusion';
import MbtiSW from './DetailApp/MbtiSW';
import Mbtifriendship from './DetailApp/Mbtifriendship';
import Mbticonclusion from './DetailApp/Mbticonclusion';
import Mbticareerpaths from './DetailApp/Mbticareerpaths';
import Mbtiparenthood from './DetailApp/Mbtiparenthood';
import Mbtiworkplacehabits from './DetailApp/Mbtiworkplacehabits';

import ContactMain from './Contact/ContactMain';
import LoginPage from './Login/LoginPage';

import SignupSuccessMain from './sign/SignupSuccessMain'; 
import MyPageMain from './myPage/MyPageMain';

//기진
import Profiletypes from './Profiles/Profiletypes'
//기진 끝

const App = () => {
  return (
    <BrowserRouter>
      <>
      
      <Routes>

      <Route path="/" element={<Main/>} />

      <Route path="/Mbtiintrodusion" element={<Mbtiintrodusion id="1" /> } />
      <Route path="/MbtiSW" element={<MbtiSW id="1" /> } />
      <Route path="/MbtiRelationships" element={<MbtiRelationships id="1" />} />
      <Route path="/Mbtifriendship" element={<Mbtifriendship id="1" /> } />
      <Route path="/Mbtiparenthood" element={<Mbtiparenthood id="1" /> } />
      <Route path="/Mbticareerpaths" element={<Mbticareerpaths id="1" /> } />
      <Route path="/Mbtiworkplacehabits" element={<Mbtiworkplacehabits id="1" /> } />
      <Route path="/Mbticonclusion" element={<Mbticonclusion id="1" /> } />

  
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPage" element={<LoginPage/>}/> 
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/> 

        <Route path="/signUp" element={<SignupMain /> } />
        <Route path="/ContactMain" element={<ContactMain/>}/>
        <Route path="/LoginPage" element={<LoginPage />}/>
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler />}/>         
        <Route path="/test" element={<Test/>} />

      {/* 기진 시작 */}
        <Route path="/Profiletypes" element={<Profiletypes/>}/>
      {/* 기진 끝 */}

      </Routes>
      </>
    </BrowserRouter>

    
  )
  
};

export default App;
