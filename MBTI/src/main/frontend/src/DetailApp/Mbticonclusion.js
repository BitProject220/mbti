import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import conclusion from './db/conclusion';
import Conclusion from './Detailpage/Conclusion';
import SocialIcons from './SocialIcons';
import '../css/reset.css';
import '../css/detail/detatil.css';

const Mbticonclusion = ({ id }) => {

    const data = conclusion.find(data => data.id === id)

    return (
        <div>
            <Header />
                <div className='titleimg' style={{ textAlign: 'center', }} >
                <img src={data.url} alt='결론' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px', paddingTop: 90+'px',}} />
                </div>
            <div className='body'>
                <div className='sticky'>           
                    <div className='sidediv-left' >
                            <h2>인적성 보고서</h2>
                            <ul>
                            <a href='/Mbtiintrodusion' className='atherside'><li>소개</li></a>
                        <a href='/MbtiSW' className='atherside' ><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='atherside'><li >이성을 대할 때</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >친구를 대할 때</li></a>
                        <a href='/Mbtiparenthood' className='atherside'><li >자녀를 대할 때</li></a>
                        <a href='/Mbticareerpaths' className='atherside'><li >직장에서 보이는 모습</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장에서 보이는 습관</li></a>
                        <a href='/Mbticonclusion' className='thispage'><li >결론</li></a>
                            </ul>
                    </div>
                    <Conclusion id="1" /> {/*  id 값에 전달 //*/}  
                </div>
                <div className='BtnComponent'>
                    <div className='beforeBtn'>
                        <a href='/MBTIDetail'>
                            <div className='title'>직장에서 보이는 습관</div>
                            <div className='BtnCircle'>&#8592;</div>
                        </a>
                    </div>
                    
                    <SocialIcons />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Mbticonclusion;