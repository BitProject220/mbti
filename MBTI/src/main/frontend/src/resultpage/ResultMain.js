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
      
          if(res.data === 'nonExist'){
            
            axios({
              method: 'POST',
              url: 'http://localhost:8080/user/userMbtiTypeResult',
              data: ({
                  'mbti_email' : sessionStorage.getItem("email"),
                  'mbti_type' : mymbti,
                  'mbti_EI' : perEi,
                  'mbti_NS' : perNs,
                  'mbti_TF' : perTf,
                  'mbti_JP' : perJp,
                  'mbti_AT' : perAt
                })
          }).then(()=>{
           
            
          }).catch(error =>{
            console.log(error)
          });
        }else if(res.data === 'exist'){
          
          axios({
            method: 'POST',
            url: 'http://localhost:8080/user/userMbtiTypeResultUpdate',
            data: ({
              'mbti_email' : sessionStorage.getItem("email"),
              'mbti_type' : mymbti,
              'mbti_EI' : perEi,
              'mbti_NS' : perNs,
              'mbti_TF' : perTf,
              'mbti_JP' : perJp,
              'mbti_AT' : perAt
            })
          }).then(()=>{
           
            
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

  
  // console.log(id);

  if(MBTI === 'INTJ') {
    id = "1";
    job= "?????????";
   {/**  console.log(id+'**********************************'); */}
  }
  else if(MBTI === 'INTP'){
    id = "2";
    job= "????????????";
  }else if(MBTI === 'ENTJ'){
    id = "3";
    job= "?????????";
  }else if(MBTI === 'ENTP'){
    id = "4";
    job= "?????????";
  }else if(MBTI === 'INFJ'){
    id = "5";
    job= "?????????";
  }else if(MBTI === 'INFP'){
    id = "6";
    job= "?????????";
  }else if(MBTI === 'ENFJ'){
    id = "7";
    job= "?????????";
  }else if(MBTI === 'ENFP'){
    id = "8";
    job= "?????????";
  }else if(MBTI === 'ISTJ'){
    id = "9";
    job= "???????????????";
  }else if(MBTI === 'ISFJ'){
    id = "10";
    job= "?????????";
  }else if(MBTI === 'ESTJ'){
    id = "11";
    job= "?????????";
  }else if(MBTI === 'ESFJ'){
    id = "12";
    job= "?????????";
  }else if(MBTI === 'ISTP'){
    id = "13";
    job= "??????";
  }else if(MBTI === 'ISFP'){
    id = "14";
    job= "?????????";
  }else if(MBTI === 'ESTP'){
    id = "15";
    job= "?????????";
  }else if(MBTI === 'ESFP'){
    id = "16";
    job= "?????????";
  }
  
  //console.log("????????????"+id);
  const navigate = useNavigate();
  const onnext = (e)=> {
    navigate("/MbtiSW", { state: { id  }});
  }
  

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
                <div className='title'>????????? ??????</div>
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