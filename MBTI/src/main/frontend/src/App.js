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
import LoginPageMain from './Login/LoginPageMain';
import FindPasswordMain from './Login/FindPasswordMain';
import Signup from './sign/Signup';
import ResultMain from './resultpage/ResultMain';


import SignupSuccessMain from './sign/SignupSuccessMain'; 
import MyPageMain from './myPage/MyPageMain';
import UserInformationMain from './myPage/UserInformationMain';
import FreeBoard from './board/FreeBoard';
import MbtiBoard from './board/MbtiBoard';

// 기진
import Profiletypes from './profiles/Profiletypes'

import UserEditModal from './myPage/UserEditModal';
import UserDeleteModal from './myPage/UserDeleteModal';



import BoardMain from './board/BoardMain';



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
        <Route path="/LoginPageMain" element={<LoginPageMain/>}/> 
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/>  
    
        <Route path="/signUp" element={<SignupMain /> } />
        <Route path="/signupSuccess" element={<SignupSuccessMain /> } />
        <Route path="/userInfo" element={ <UserInformationMain /> } />


        <Route path="/ContactMain" element={<ContactMain/>}/>
        <Route path="/LoginPageMain" element={<LoginPageMain />}/>
        <Route path="/FindPasswordMain" element={<FindPasswordMain />}/>
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler />}/> 
        <Route index element={<LoginPageMain/>} />
        <Route path="/test" element={<Test/>} />

        <Route path="/MyPageMain" element={<MyPageMain />} />

        <Route path="FreeBoard" element={<FreeBoard />}/>
        <Route path="MbtiBoard" element={<MbtiBoard />}/>


      {/* 기진 시작 */} 
  
        {/* 프로필 */}

        <Route path="/Profiletypes" element={<Profiletypes/>}/>
        {/* 보드 */}
        <Route path="/BoardMain" element={<BoardMain/>}/>
      {/* 기진 끝 */}

        <Route path="/Main">
          <Route index element={<Main/>} />

        </Route>
        <Route path='/resultmain' element={<ResultMain />}/>

        <Route path='/UserEditModal' element={<UserEditModal />}/>
        <Route path='/UserDeleteModal' element={<UserDeleteModal/>}/>

   
      </Routes>
      </>
    </BrowserRouter>

    
  )
  
};

export default App;
