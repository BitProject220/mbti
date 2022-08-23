import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import introduciondata from './db/introduciondata';
import Introduction from './Detailpage/Introduction';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';


const Mbtiintrodusion = () => {
    
    const {state} = useLocation();
    const { id } = state;

    const data = introduciondata.find(data => data.id === state.id)

    console.log(state.id);
   

    return (
        <>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='소개' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}} />
            </div>
            <div className='body'>
            <div className='sticky' >           
                <SidevarLeft id={state.id}/>
                <Introduction id={state.id}/> {/*  id 값에 전달 //*/}  
            </div>
            <div className='BtnComponent'>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>강점과 약점</div>
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

export default Mbtiintrodusion;