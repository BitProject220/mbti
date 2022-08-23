import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import relationshipsdata from './db/relationshipsdata';
import Relationships from './Detailpage/Relationships';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const MbtiRelationships = ( ) => {

    const {state} = useLocation();

    const data = relationshipsdata.find(data => data.id === state.id)
    const {id} = state;
    console.log(state.id);


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/MbtiSW", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/Mbtifriendship", { state: { id: id  }});
    }
    return (
        <>
            <Header />

            <div className='titleimg'  >
            <img src={data.url} alt='연인관계에서' />

            </div>
            <div className='body'>
            <div className='sticky' >           
                <SidevarLeft id={data.id}/>
                <Relationships id={data.id}/>
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn' onClick={onbefore}>
                        <div className='title'>강점과 약점</div>
                        <div className='BtnCircle'>&#8592;</div>
                </div>
                <div className='nextBtn' onClick={onnext}>
                        <div className='title'>친구를 대할 때</div>
                        <div className='BtnCircle'>&#8594;</div>
                </div>
                <SocialIcons />
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default MbtiRelationships;