import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import strongweakdata from './db/strongweakdata';
import Friendship from './Detailpage/Friendship';
import StrengthsWeaknesses from './Detailpage/StrengthsWeaknesses';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const Mbtifriendship = ( ) => {

    const {state} = useLocation();
    const data = strongweakdata.find(data => data.id === state.id)
    const {id} = state;


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/MbtiRelationships", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/Mbtiparenthood", { state: { id: id  }});
    }

    return (
        <>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='친구를 대할 때'style={{  marginBottom: 60+'px', paddingTop: 90+'px',}} />
            </div>
            <div className='body'>
            <div className='sticky' >           
                <SidevarLeft id={data.id}/>
                <Friendship id={data.id} />
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn' onClick={onbefore}>
                        <div className='title'>이성을 대할 때</div>
                        <div className='BtnCircle'>&#8592;</div>
                </div>
                <div className='nextBtn' onClick={onnext}>
                        <div className='title'>자녀를 대할 때</div>
                        <div className='BtnCircle'>&#8594;</div>
                </div>
                <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mbtifriendship;