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

    const data = strongweakdata.find(data => data.id === state.id)
    const {id} = state;
    console.log(state.id);


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/Mbtiintrodusion", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/MbtiRelationships", { state: { id: id  }});
    }

    return (
        <>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
             <img src={data.url} alt='강점과 약점' style={{ marginBottom: 60+'px', paddingTop: 90+'px',}}/>
             </div>
            <div className='body'>
            <div className='sticky' >           
                 <SidevarLeft id={data.id}/>
                <StrengthsWeaknesses id={data.id} />  
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn' onClick={onbefore}>
                        <div className='title'>소개</div>
                        <div className='BtnCircle'>&#8592;</div>
                </div>
                <div className='nextBtn' onClick={onnext}>
                        <div className='title'>이성을 대할 때</div>
                        <div className='BtnCircle'>&#8594;</div>
                </div>
                <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MbtiSW;