import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../main/Footer';
import Header from '../main/Header';
import careerpaths from './db/careerpaths';
import Careerpaths from './Detailpage/Careerpaths';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const Mbticareerpaths = () => {

    const {state} = useLocation();
    const data = careerpaths.find(data => data.id === state.id)

    return (
        <>
            <Header />
                <div className='titleimg' style={{ textAlign: 'center', }} >
                <img src={data.url} alt='직장에서의 모습' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}} />
                </div>
            <div className='body'>    
            <div className='sticky' >           
                <SidevarLeft id={data.id} />                
                <Careerpaths id={data.id} /> 
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn'>
                    <a href='/MBTIDetail'>
                        <div className='title'>111</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>222</div>
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

export default Mbticareerpaths;