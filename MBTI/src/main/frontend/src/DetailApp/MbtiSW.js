import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import introduciondata from './db/introduciondata';
import strongweakdata from './db/strongweakdata';
import StrengthsWeaknesses from './Detailpage/StrengthsWeaknesses';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const MbtiSW = ( ) => {

    const {state} = useLocation();
    const data = introduciondata.find(data => data.id === state.id)
    //alert(state.id);

    //console.log(data.id);

    return (
        <>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
             <img src={data.url} alt='강점과 약점' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}}/>
             </div>
            <div className='body'>
            <div className='sticky' >           
                 <SidevarLeft id={data.id}/>
                <StrengthsWeaknesses id={data.id} />  
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn'>
                    <a href='/MBTIDetail'>
                        <div className='title'>소개</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>이성을 대할 때</div>
                        <div className='BtnCircle'>&#8594;</div>
                    </a>
                </div>
                <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MbtiSW;