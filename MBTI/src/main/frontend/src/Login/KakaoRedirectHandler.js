//리다이렉트될 화면

//  import React, { useEffect } from 'react';
//  import axios from 'axios';
//  import Main from '../main/Main'

// const KakaoRedirectHandler = () => {
//     useEffect(()=> {
//         let params = new URL(document.location.toString()).searchParams;
//         let code = params.get("code"); // 인가코드 받는 부분
//         let grant_type = "authorization_code";
//         let client_id = "d6cc8f356b4510bcb983399be19c9ec8";
    
//         axios.post(`https://kauth.kakao.com/oauth/token?
//             grant_type=${grant_type}
//             &client_id=${client_id}
//             &redirect_uri=http://localhost:8080/user/kakaoLogin
//             &code=${code}`
//             , {
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
//         }
//       }).then((res) => {
//           console.log(res)
//           // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
//       })
//       }, [])
    
//       return <div><Main/></div>;
//     };
//     const CallbackKakao = () => {

//     }

// export default KakaoRedirectHandler;
//---------------------------------------------------
// var express = require('express');
// var router = express.Router();
// const KAKAO_OAUTH_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token"
// const KAKAO_GRANT_TYPE="authorization_code"
// const KAKAO_CLIENT_id="d6cc8f356b4510bcb983399be19c9ec8"
// const KAKAO_REDIRECT_URL="http://localhost:8080/user/KakaoLogin"

// router.get('/kakao/code', function (req, res, next) {
//         let code = req.query.code;
//         try{
//             axios.post(
//                 `${KAKAO_OAUTH_TOKEN_API_URL}?grant_type=${KAKAO_GRANT_TYPE}&client_id=${KAKAO_CLIENT_id}&redirect_uri=${KAKAO_REDIRECT_URL}&code=${code}`
//                 , {
//                  headers: {
//                     'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
//                 }
//             }).then((result)=>{
//                 console.log(result.data['access_token'])
//                 window.location.href='/Main';
//                 // 토큰을 활용한 로직을 적어주면된다.
    
//             }).catch(e=> {
//                 console.log(e)
//                 res.send(e);
//             })
//         }catch(e){
//             console.log(e)
//             res.send(e);
//         }
// })