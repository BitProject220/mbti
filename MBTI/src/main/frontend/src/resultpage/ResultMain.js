import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
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
    jp > 0 ? mymbti = mymbti.concat('J') :  mymbti = mymbti.concat('P')
    tf > 0 ? mymbti = mymbti.concat('T') :  mymbti = mymbti.concat('F')
    at > 0 ? mymbti = mymbti.concat('-A') : mymbti = mymbti.concat('-T')
    
    
    
    var perEi = 50 + ei;
    var perNs = 50 + ns;
    var perJp = 50 + jp;
    var perTf = 50 + tf;
    var perAt = 50 + at;

    setMbti(mymbti);
    setMbtiresult([{mbti:mymbti,ei:perEi,ns:perNs,jp:perJp,tf:perTf,at:perAt}])
    
    //console.log('resultMain = ' +state);
  },[])
  
    return (
        <div className='Main'>
        <Header />
        
        <ResultPage mbtiresult={mbtiresult}/>
  
        <Footer />
      </div>
    );
};

export default ResultMain;