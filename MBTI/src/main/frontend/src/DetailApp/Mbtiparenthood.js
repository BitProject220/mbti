import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Footer from '../main/Footer';
import Header from '../main/Header';
import parenthood from './db/parenthood';
import Parenthood from './Detailpage/Parenthood';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const Mbtiparenthood = () => {

    const {state} = useLocation();
    const data = parenthood.find(data => data.id === state.id)
    const {id} = state;


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/Mbtifriendship", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/Mbticareerpaths", { state: { id: id  }});
    }
    
    return (
        <>
            <Header />
            <div className='titleimg' >
            <img src={data.url} alt='자녀를 대할 때' />
            </div>
            <div className='body'>
            <div className='sticky' >           
                <SidevarLeft id={data.id}/>
                <Parenthood id={data.id}/>
            </div>
            <div className='BtnComponent'>
                <div className='beforeBtn' onClick={onbefore}>
                        <div className='title'>친구를 대할 때</div>
                        <div className='BtnCircle'>&#8592;</div>
                </div>
                <div className='nextBtn' onClick={onnext}>
                        <div className='title'>직장에서 보이는 모습</div>
                        <div className='BtnCircle'>&#8594;</div>
                </div>
                <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Mbtiparenthood;