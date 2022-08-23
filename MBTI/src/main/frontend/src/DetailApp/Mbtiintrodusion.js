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
    
    const data = introduciondata.find(data => data.id === state.id)
    const {id} = state;
    console.log(state.id);

    const navigate = useNavigate();
    const onnext = (e)=> {
        navigate("/MbtiSW", { state: { id: id  }});
    }

    return (
        <>
            <Header />
            <div className='titleimg'  >
            <img src={data.url} alt='소개'  />
            </div>
            <div className='body'>
            <div className='sticky' >           
                <SidevarLeft id={state.id}/>
                <Introduction id={state.id}/>
            </div>
            <div className='BtnComponent'>
                <div className='nextBtn' onClick={ onnext }>
                        <div className='title'>강점과 약점</div>
                        <div className='BtnCircle'>&#8594;</div>
                </div>
                <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mbtiintrodusion;