import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Workplacehabits from './Detailpage/Workplacehabits';
import SocialIcons from './SocialIcons';
import workplacehabits from './db/workplacehabits';
import SidevarLeft from './SidevarLeft';
import { useLocation, useNavigate } from 'react-router';

const Mbtiworkplacehabits = ( ) => {

    const {state} = useLocation();
    const data = workplacehabits.find(data => data.id === state.id)
    const {id} = state;


    const navigate = useNavigate();
    const onbefore = (e)=> {
        navigate("/Mbticareerpaths", { state: { id: id  }});
    }

    const onnext = (e)=> {
        navigate("/Mbticonclusion", { state: { id: id  }});
    }
    return (
        <>
            <Header />
            <div className='content'>
                <input type="hidden" data={data.title}></input>
                <div className='titleimg' style={{ textAlign: 'center', }} >
                <img src={data.url} alt='직장에서 보이는 습관' style={{ marginBottom: 60+'px', paddingTop: 90+'px',}}/>
                </div>
                <div className='body'>
                <div className='sticky'>           
                    <SidevarLeft id={data.id} />
                    <Workplacehabits id={data.id} />
                </div>
                    <div className='BtnComponent'>
                    <div className='beforeBtn' onClick={onbefore}>
                            <div className='title'>직장에서 보이는 모습</div>
                            <div className='BtnCircle'>&#8592;</div>
                    </div>
                    <div className='nextBtn' onClick={onnext}>
                            <div className='title'>결론</div>
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

export default Mbtiworkplacehabits;