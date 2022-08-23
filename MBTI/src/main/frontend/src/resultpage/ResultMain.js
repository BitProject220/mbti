import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Footer from '../main/Footer';
import Header from '../main/Header';
import ResultPage from './ResultPage';





const ResultMain = () => {
  const { state } = useLocation();
  const { reselt, ei, ns, tf, jp, at} = state;
  const [mbtiresult, setMbtiresult] = useState({
    mbti : '',
    ei : ei,
    ns : ns,
    jp : tf,
    at : jp
  });
  useEffect(() => {
    let mymbti = '';
   
    ei > 0 ? mymbti = mymbti.concat('E')  : mymbti = mymbti.concat('I')
    ns > 0 ? mymbti = mymbti.concat('N') :  mymbti = mymbti.concat('S')
    jp > 0 ? mymbti = mymbti.concat('J') :  mymbti = mymbti.concat('P')
    tf > 0 ? mymbti = mymbti.concat('T') :  mymbti = mymbti.concat('F')
    at > 0 ? mymbti = mymbti.concat('-A') : mymbti = mymbti.concat('-T')
    
    setMbtiresult(...mbtiresult,{mbti : mymbti});
    console.log(mbtiresult)

  },[])

  console.log('resultMain = ' +state);
    return (
        <div className='Main'>
        <Header />
        
        <ResultPage state={state}/>
  
        <Footer />
      </div>
    );
};

export default ResultMain;