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

// 기진
import Profiletypes from './profiles/Profiletypes'
import ScrollToTop from './ScrollTop';

import FreeBoard from './board/boardList/FreeBoard';
import MbtiBoard from './board/boardList/MbtiBoard';
// 기진 끝

import UserEditModal from './myPage/UserEditModal';
import UserDeleteModal from './myPage/UserDeleteModal';

import FreeBoardWriteMain from './board/boardWrite/FreeBoardWriteMain';
import MbtiBoardWriteMain from './board/boardWrite/MbtiBoardWirteMain';
import FreeBoardViewMain from './board/boardView/FreeBoardViewMain';
import MbtiBoardViewMain from './board/boardView/MbtiBoardViewMain';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <>      
      <Routes>

      <Route path="/" element={<Main/>} />

      <Route exact path="/Mbtiintrodusion" element={<Mbtiintrodusion  /> } />
      <Route exact path="/MbtiSW" element={<MbtiSW  /> } />
      <Route exact path="/MbtiRelationships" element={<MbtiRelationships  />} />
      <Route exact path="/Mbtifriendship" element={<Mbtifriendship  /> } />
      <Route exact path="/Mbtiparenthood" element={<Mbtiparenthood  /> } />
      <Route exact path="/Mbticareerpaths" element={<Mbticareerpaths  /> } />
      <Route exact path="/Mbtiworkplacehabits" element={<Mbtiworkplacehabits /> } />
      <Route exact path="/Mbticonclusion" element={<Mbticonclusion /> } />

  
        <Route path="/ContactMain" element={<ContactMain/>}/> 
        <Route path="/LoginPageMain" element={<LoginPageMain/>}/> 
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler/>}/>  
    
        <Route path="/signUp" element={<SignupMain /> } />
        <Route path="/signupSuccess" element={<SignupSuccessMain /> } />
        <Route path="/userInfo" element={ <UserInformationMain /> } />


        <Route path="/ContactMain" element={<ContactMain/>}/>
        <Route path="/LoginPageMain" element={<LoginPageMain />}/>
        <Route path="/FindPasswordMain" element={<FindPasswordMain />}/>
        {/* <Route path="/kakaoLogin" element={<KakaoRedirectHandler />}/>  */}
        <Route index element={<LoginPageMain/>} />
        <Route path="/test" element={<Test/>} />

        <Route path="/MyPageMain" element={<MyPageMain />} />



      {/* 기진 시작 */} 
  
        {/* 프로필 */}
        <Route path="/Profiletypes" element={<Profiletypes/>}/>
        {/* 보드 */}
        <Route path="/FreeBoard" element={<FreeBoard />}/>
        <Route path="/MbtiBoard" element={<MbtiBoard />}/>

      {/* 기진 끝 */}

        <Route path="/Main">
          <Route index element={<Main/>} />

        </Route>
        <Route path='/resultmain' element={<ResultMain />}/>

        <Route path='/UserEditModal' element={<UserEditModal />}/>
        <Route path='/UserDeleteModal' element={<UserDeleteModal/>}/>


        <Route path='/FreeBoardWriteMain' element={<FreeBoardWriteMain/>} />
        <Route path='/MbtiBoardWriteMain' element={<MbtiBoardWriteMain/>} />
        <Route path='/FreeBoardViewMain' element={<FreeBoardViewMain/>} />
        <Route path='/MbtiBoardViewMain' element={<MbtiBoardViewMain/>} />
  
   
      </Routes>
      </>
    </BrowserRouter>

    
  )
  
};

export default App;
