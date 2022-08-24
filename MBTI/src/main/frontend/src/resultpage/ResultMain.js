import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Introduction from '../DetailApp/Detailpage/Introduction';
import Mbtiintrodusion from '../DetailApp/Mbtiintrodusion';
import SidevarLeft from '../DetailApp/SidevarLeft';
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
    
    //console.log('resultMain = ' +state);
  },[]);

  const MBTI = mbti.substr(0 , 4);
  let id = '13';
  
  console.log("나의 엠비티아이는"+MBTI);
  // console.log(id);

  if(MBTI === 'INTJ') {
    id = "1";
   {/**  console.log(id+'**********************************'); */}
  }
  else if(MBTI === 'INTP'){
    id = "2";
  }else if(MBTI === 'ENTJ'){
    id = "3";
  }else if(MBTI === 'ENTP'){
    id = "4";
  }else if(MBTI === 'INFJ'){
    id = "5";
  }else if(MBTI === 'INFP'){
    id = "6";
  }else if(MBTI === 'ENFJ'){
    id = "7";
  }else if(MBTI === 'ENFP'){
    id = "8";
  }else if(MBTI === 'ISTJ'){
    id = "9";
  }else if(MBTI === 'ISFJ'){
    id = "10";
  }else if(MBTI === 'ESTJ'){
    id = "11";
  }else if(MBTI === 'ESFJ'){
    id = "12";
  }else if(MBTI === 'ISTP'){
    id = "13";
  }else if(MBTI === 'ISFP'){
    id = "14";
  }else if(MBTI === 'ESTP'){
    id = "15";
  }else if(MBTI === 'ESFP'){
    id = "16";
  }
  
  //console.log("아이디는"+id);


  
    return (
        <div className='Main'>
        <Header />
        
        <ResultPage mbtiresult={mbtiresult} />

        <SidevarLeft id={id} />
        <Introduction id={id} />

        <Footer />
      </div>
    );
};

export default ResultMain;