import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import conclusion from './db/conclusion';
import Conclusion from './Detailpage/Conclusion';
import SocialIcons from './SocialIcons';
import '../css/reset.css';
import '../css/detail/detatil.css';
import { useLocation, useNavigate } from 'react-router';
import SidevarLeft from './SidevarLeft';

const Mbticonclusion = ( ) => {

    const {state} = useLocation();
    const data = conclusion.find(data => data.id === state.id)
    const {id} = state;


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/Mbtiworkplacehabits", { state: { id: id  }});
    }
    return (
        <>
            <Header />
                <div className='titleimg' style={{ textAlign: 'center', }} >
                <img src={data.url} alt='결론' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}} />
                </div>
            <div className='body'>
                <div className='sticky'>           
                    <SidevarLeft id={data.id}/>
                    <Conclusion id={data.id} /> 
                </div>
                <div className='BtnComponent'>
                    <div className='beforeBtn' onClick={onbefore}>
                            <div className='title'>직장에서 보이는 습관</div>
                            <div className='BtnCircle'>&#8592;</div>
                    </div>
                    
                    <SocialIcons />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mbticonclusion;