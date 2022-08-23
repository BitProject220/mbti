import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Workplacehabits from './Detailpage/Workplacehabits';
import SocialIcons from './SocialIcons';
import workplacehabits from './db/workplacehabits';
import SidevarLeft from './SidevarLeft';
import { useLocation } from 'react-router';

const Mbtiworkplacehabits = ( ) => {

    const {state} = useLocation();
    const data = workplacehabits.find(data => data.id === state.id)

    return (
        <>
            <Header />
            <input type="hidden" data={data.title}></input>
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='직장에서 보이는 습관' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}}/>
            </div>
            <div className='body'>
            <div className='sticky'>           
                <SidevarLeft id={data.id} />
                <Workplacehabits id={data.id} />
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn'>
                    <a href='/MBTIDetail'>
                        <div className='title'>직장에서 보이는 모습</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>결론</div>
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

export default Mbtiworkplacehabits;