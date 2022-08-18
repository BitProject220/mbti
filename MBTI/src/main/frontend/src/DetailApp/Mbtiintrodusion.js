import React from 'react';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import introduciondata from './db/introduciondata';
import Introduction from './Detailpage/Introduction';
import SocialIcons from './SocialIcons';

const Mbtiintrodusion = ({ id }) => {

    const data = introduciondata.find(data => data.id === id)
    return (
        <div>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='소개' style={{ width: 100+'%', height: 'auto', marginBottom: 60+'px',}} />
            </div>

            <div className='sticky' >           
                <div className='sidediv-left' >
                    <h2>인적성 보고서</h2>
                    <ul>
                    <a href='/Mbtiintrodusion' className='thispage'><li>소개</li></a>
                        <a href='/MbtiSW' className='atherside' ><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='atherside'><li >이성을 대할 때</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >친구를 대할 때</li></a>
                        <a href='/Mbtiparenthood' className='atherside'><li >자녀를 대할 때</li></a>
                        <a href='/Mbticareerpaths' className='atherside'><li >직장에서 보이는 모습</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장에서 보이는 습관</li></a>
                        <a href='/Mbticonclusion' className='atherside'><li >결론</li></a>
                    </ul>
                </div>
                <Introduction id='1'/> {/*  id 값에 전달 //*/}  
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
            <Footer />
        </div>
    );
};

export default Mbtiintrodusion;