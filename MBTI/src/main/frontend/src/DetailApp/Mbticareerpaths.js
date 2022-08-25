import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Footer from '../main/Footer';
import Header from '../main/Header';
import careerpaths from './db/careerpaths';
import Careerpaths from './Detailpage/Careerpaths';
import SidevarLeft from './SidevarLeft';
import SocialIcons from './SocialIcons';

const Mbticareerpaths = () => {

    const {state} = useLocation();
    const data = careerpaths.find(data => data.id === state.id)
    const {id} = state;


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/Mbtiparenthood", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/Mbtiworkplacehabits", { state: { id: id  }});
    }
    return (
        <>
            <Header />
            <div className='titleimg' >
            <img src={data.url} alt='직장에서의 모습'  />
            </div>
            <div className='body'>    
            <div className='sticky' >           
            <SidevarLeft id={data.id} />                
            <Careerpaths id={data.id} /> 
            </div>
            <div className='BtnComponent'>
            <div className='beforeBtn' onClick={onbefore}> 
                    <div className='title'>자녀를 대할 때</div>
                    <div className='BtnCircle'>&#8592;</div>
            </div>
            <div className='nextBtn' onClick={onnext}>
                    <div className='title'>직장에서 보이는 습관</div>
                    <div className='BtnCircle'>&#8594;</div>
            </div>
            <SocialIcons />
            </div>
            </div>
            <Footer />
        </>
    );
};

export default Mbticareerpaths;