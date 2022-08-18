import React from 'react';
import '../css/detail/detatil.css';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import relationshipsdata from './db/relationshipsdata';
import Relationships from './Detailpage/Relationships';
import SocialIcons from './SocialIcons';

const MbtiRelationships = ({ id }) => {

    const data = relationshipsdata.find(data => data.id === id)

    return (
        <div>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='연인관계에서' style={{ width: 80+'%', height: 300,}} />
            </div>
            <div className='sticky' >           
                <div className='sidediv-left' >
                        <h2>인적성 보고서</h2>
                        <ul>
                        <a href='/Mbtiintrodusion' className='atherside'><li>소개</li></a>
                        <a href='/MbtiSW' className='atherside' ><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='thispage'><li >이성을 대할 때</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >친구를 대할 때</li></a>
                        <a href='/Mbtiparenthood' className='atherside'><li >자녀를 대할 때</li></a>
                        <a href='/Mbticareerpaths' className='atherside'><li >직장에서 보이는 모습</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장에서 보이는 습관</li></a>
                        <a href='/Mbticonclusion' className='atherside'><li >결론</li></a>
                        </ul>
                </div>
                <Relationships id='9' /> {/*  id 값에 전달 //*/}  
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn'>
                    <a href='/MBTIDetail'>
                        <div className='title'>소개</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>로맨틱한 관계</div>
                        <div className='BtnCircle'>&#8594;</div>
                    </a>
                </div>
                <SocialIcons />
            </div>
            <Footer />
        </div>
    );
};

export default MbtiRelationships;