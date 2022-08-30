import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Introduction from '../DetailApp/Detailpage/Introduction';
import Mbtiintrodusion from '../DetailApp/Mbtiintrodusion';
import SidevarLeft from '../DetailApp/SidevarLeft';
import SocialIcons from '../DetailApp/SocialIcons';
import Footer from '../main/Footer';
import Header from '../main/Header';
import ResultPage from './ResultPage';





const ResultMain = () => {
  const { state } = useLocation();
  const { reselt, ei, ns, tf, jp, at} = state;

  console.log('렌더링');
  const [mbti, setMbti] = useState('');
  const [mbtiresult, setMbtiresult] = useState([
    {
    mbti : '',
    ei : 0,
    ns : 0,
    tf : 0,
    jp : 0,
    at : 0
    }
  ]);
  
  useEffect(() => {
    let mymbti = '';
    
   
    ei > 0 ? mymbti = mymbti.concat('E')  : mymbti = mymbti.concat('I')
    ns > 0 ? mymbti = mymbti.concat('N') :  mymbti = mymbti.concat('S')
    tf > 0 ? mymbti = mymbti.concat('T') :  mymbti = mymbti.concat('F')
    jp > 0 ? mymbti = mymbti.concat('J') :  mymbti = mymbti.concat('P')
    at > 0 ? mymbti = mymbti.concat('-A') : mymbti = mymbti.concat('-T')
    
    
    
    var perEi = 50 + ei;
    var perNs = 50 + ns;
    var perJp = 50 + jp;
    var perTf = 50 + tf;
    var perAt = 50 + at;

    setMbti(mymbti);
    setMbtiresult([{mbti:mymbti,ei:perEi,ns:perNs,jp:perJp,tf:perTf,at:perAt}])

    const qs = require('qs');

    axios({
      method: 'POST',
      url: 'http://localhost:8080/user/userMbtiTypeResultCheck',
      data: qs.stringify({'mbti_email' : sessionStorage.getItem("email")})
  }).then((res)=>{
    alert("갔다!");
      console.log("데이터 잘 갔음!")
      if(res.data === 'nonExist'){
        alert("데이터 존재하지 않음")
        axios({
          method: 'POST',
          url: 'http://localhost:8080/user/userMbtiTypeResult',
          data: ({
              'mbti_email' : sessionStorage.getItem("email"),
              'mbti_type' : mbti,
              'mbti_EI' : perEi,
              'mbti_NS' : perNs,
              'mbti_TF' : perTf,
              'mbti_JP' : perJp,
              'mbti_AT' : perAt
             })
      }).then(()=>{
        console.log("타입 저장 완료!")
      }).catch(error =>{
        console.log(error)
      });
    }else if(res.data === 'exist'){
      alert("데이터 존재함")
      axios({
        method: 'POST',
        url: 'http://localhost:8080/user/userMbtiTypeResultUpdate',
        data: ({
          'mbti_email' : sessionStorage.getItem("email"),
          'mbti_type' : mbti,
          'mbti_EI' : perEi,
          'mbti_NS' : perNs,
          'mbti_TF' : perTf,
          'mbti_JP' : perJp,
          'mbti_AT' : perAt
        })
      }).then(()=>{
        console.log(mbti+"dssssdsddsdsdsdsdsdsdsdsd")
        console.log("타입 저장 완료!")
      }).catch(error =>{
          console.log(error)
      });

      }
  }).catch(error =>{
      console.log(error)
  });
    
    //console.log('resultMain = ' +state);
  },[]);

  const MBTI = mbti.substr(0 , 4);
  let id = '13';
  let job = '';
  console.log("나의 엠비티아이는"+MBTI);
  // console.log(id);

  if(MBTI === 'INTJ') {
    id = "1";
    job= "전략가";
   {/**  console.log(id+'**********************************'); */}
  }
  else if(MBTI === 'INTP'){
    id = "2";
    job= "논리술사";
  }else if(MBTI === 'ENTJ'){
    id = "3";
    job= "통솔자";
  }else if(MBTI === 'ENTP'){
    id = "4";
    job= "변론가";
  }else if(MBTI === 'INFJ'){
    id = "5";
    job= "옹호자";
  }else if(MBTI === 'INFP'){
    id = "6";
    job= "중재자";
  }else if(MBTI === 'ENFJ'){
    id = "7";
    job= "선도자";
  }else if(MBTI === 'ENFP'){
    id = "8";
    job= "활동가";
  }else if(MBTI === 'ISTJ'){
    id = "9";
    job= "현실주의자";
  }else if(MBTI === 'ISFJ'){
    id = "10";
    job= "수호자";
  }else if(MBTI === 'ESTJ'){
    id = "11";
    job= "경영자";
  }else if(MBTI === 'ESFJ'){
    id = "12";
    job= "집정관";
  }else if(MBTI === 'ISTP'){
    id = "13";
    job= "장인";
  }else if(MBTI === 'ISFP'){
    id = "14";
    job= "모험가";
  }else if(MBTI === 'ESTP'){
    id = "15";
    job= "사업가";
  }else if(MBTI === 'ESFP'){
    id = "16";
    job= "연예인";
  }
  
  //console.log("아이디는"+id);
  const navigate = useNavigate();
  const onnext = (e)=> {
    navigate("/MbtiSW", { state: { id  }});
  }
  console.log(id);

    return (
        <div className='Main'>
        <Header />
        
        <ResultPage mbtiresult={mbtiresult} />
        <div className='body'>
        <div className='sticky' >
        <SidevarLeft id={id} />
        <Introduction id={id} />
        </div>
        <div className='BtnComponent'>
            <div className='nextBtn' onClick={ onnext }>
                <div className='title'>강점과 약점</div>
                <div className='BtnCircle'>&#8594;</div>
            </div>
            </div>
        </div>
        <SocialIcons />
        <Footer />
      </div>
    );
};

export default ResultMain;