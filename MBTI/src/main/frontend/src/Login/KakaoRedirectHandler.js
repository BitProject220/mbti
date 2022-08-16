//리다이렉트될 화면

import React, { useEffect } from 'react';
import axios from 'axios';
import Main from '../main/Main'

const KakaoRedirectHandler = () => {
    useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        let grant_type = "authorization_code";
        let client_id = "d6cc8f356b4510bcb983399be19c9ec8";
    
        axios.post(`https://kauth.kakao.com/oauth/token?
            grant_type=${grant_type}
            &client_id=${client_id}
            &redirect_uri=http://localhost:3000/kakaoLogin
            &code=${code}`
            , {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
          console.log(res)
          // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      })
      }, [])
    
      return <div><Main/></div>;
    };

export default KakaoRedirectHandler;