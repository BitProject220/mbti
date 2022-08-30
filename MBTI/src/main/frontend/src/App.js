import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ResultMain from './resultpage/ResultMain';


import SignupSuccessMain from './sign/SignupSuccessMain'; 
import MyPageMain from './myPage/MyPageMain';
import UserInformationMain from './myPage/UserInformationMain';

// 기진
import Profiletypes from './profiles/Profiletypes'
import ScrollToTop from './ScrollTop';

import FreeBoard from './board/boardList/FreeBoard';
import MbtiBoard from './board/boardList/MbtiBoard';
// 기진 끝


import FreeBoardWriteMain from './board/boardWrite/FreeBoardWriteMain';
import MbtiBoardWriteMain from './board/boardWrite/MbtiBoardWriteMain';
import FreeBoardViewMain from './board/boardView/FreeBoardViewMain';
import MbtiBoardViewMain from './board/boardView/MbtiBoardViewMain';
import ReplyBoard from './replyboard/ReplyBoard';
import FreeBoardView from './board/boardView/FreeBoardView';

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />     
      <Routes>

        {
          sessionStorage.getItem('email') === null ?
      <> 
      <Route path="/" element={<LoginPageMain/>} />
        {/* 승찬 */}
      <Route path="/LoginPageMain" element={<LoginPageMain/>}/>
      <Route index element={<LoginPageMain/>} /> 
      <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/>
      <Route path="/FindPasswordMain" element={<FindPasswordMain />}/>
      <Route path="/ContactMain" element={<ContactMain/>}/> 

        {/* 유진 */}
      <Route path="/signUp" element={<SignupMain /> } />
      <Route path="/signupSuccess" element={<SignupSuccessMain /> } /> 
      </>

      :
      <>
      
      {/* 승찬 */}
      <Route path="/ContactMain" element={<ContactMain/>}/> 

      {/* 재남 */}
      <Route path="/test" element={<Test/>} />
      <Route path='/resultmain' element={<ResultMain />}/>

      {/* 범주 */}
      <Route exact path="/Mbtiintrodusion" element={<Mbtiintrodusion  /> } />
      <Route exact path="/MbtiSW" element={<MbtiSW  /> } />
      <Route exact path="/MbtiRelationships" element={<MbtiRelationships  />} />
      <Route exact path="/Mbtifriendship" element={<Mbtifriendship  /> } />
      <Route exact path="/Mbtiparenthood" element={<Mbtiparenthood  /> } />
      <Route exact path="/Mbticareerpaths" element={<Mbticareerpaths  /> } />
      <Route exact path="/Mbtiworkplacehabits" element={<Mbtiworkplacehabits /> } />
      <Route exact path="/Mbticonclusion" element={<Mbticonclusion /> } />
      <Route exact path="/ReplyBoard" element={<ReplyBoard /> } />
      <Route exact path="/FreeBoardView" element={<FreeBoardView /> } />

      {/* 기진 */}
              {/* 프로필 */}
              <Route path="/Profiletypes" element={<Profiletypes/>}/>
              {/* 보드 */}
              <Route path="/FreeBoard" element={<FreeBoard />}/>
              <Route path="/MbtiBoard" element={<MbtiBoard />}/>

      {/* 유진 */}
      <Route path="/userInfo" element={ <UserInformationMain /> } />

      {/* 소윤 */}
      <Route path="/">
      <Route index element={<Main/>} />
      <Route path="/MyPageMain" element={<MyPageMain />} />
      <Route path='/FreeBoardWriteMain' element={<FreeBoardWriteMain/>} />
      <Route path='/MbtiBoardWriteMain' element={<MbtiBoardWriteMain/>} />
      <Route path='/FreeBoardViewMain' element={<FreeBoardViewMain/>} />
      <Route path='/MbtiBoardViewMain' element={<MbtiBoardViewMain/>} />

      </Route>
      </>
        }

      </Routes>
    </BrowserRouter>

    
  )
  
};

export default App;
