import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import parenthood from './db/parenthood';
import Parenthood from './Detailpage/Parenthood';
import SocialIcons from './SocialIcons';

const Mbtiparenthood = ({ id }) => {

    const data = parenthood.find(data => data.id === id)
    return (
        <div>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='자녀를 대할 때' style={{ width: 80+'%', height: 300,}} />
            </div>

            <div className='sticky' >           
                <div className='sidediv-left' >
                    <h2>인적성 보고서</h2>
                    <ul>
                    <a href='/Mbtiintrodusion' className='atherside'><li>소개</li></a>
                        <a href='/MbtiSW' className='atherside' ><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='atherside'><li >이성을 대할 때</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >친구를 대할 때</li></a>
                        <a href='/Mbtiparenthood' className='thispage'><li >자녀를 대할 때</li></a>
                        <a href='/Mbticareerpaths' className='atherside'><li >직장에서 보이는 모습</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장에서 보이는 습관</li></a>
                        <a href='/Mbticonclusion' className='atherside'><li >결론</li></a>
                    </ul>
                </div>
                <Parenthood id='1'/> {/*  id 값에 전달 //*/}  
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
export default Mbtiparenthood;