import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import careerpaths from './db/careerpaths';
import Careerpaths from './Detailpage/Careerpaths';
import SocialIcons from './SocialIcons';

const Mbticareerpaths = ({ id }) => {

    const data = careerpaths.find(data => data.id === id)

    return (
        <div>
            <Header />
            <div className='titleimg' style={{ textAlign: 'center', }} >
            <img src={data.url} alt='직장에서의 모습' style={{ width: 80+'%', height: 300,}} />
            </div>
            <div className='sticky' style={{ marginTop: 40,}}>           
                <div className='sidediv-left' style={{
                        height :  'auto' ,
                        width: 16+'%',
                        float: 'left',
                        color: 'black',
                        }}>
                        <h2>인적성 보고서</h2>
                        <ul>
                        <a href='/Mbtiintrodusion' className='atherside'><li>소개</li></a>
                        <a href='/MbtiSW' className='atherside' ><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='atherside'><li >이성을 대할 때</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >친구를 대할 때</li></a>
                        <a href='/Mbtiparenthood' className='atherside'><li >자녀를 대할 때</li></a>
                        <a href='/Mbticareerpaths' className='thispage'><li >직장에서 보이는 모습</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장에서 보이는 습관</li></a>
                        <a href='/Mbticonclusion' className='atherside'><li >결론</li></a>
                        </ul>
                </div>
                <Careerpaths id='1' /> {/*  id 값에 전달 //*/}  
            </div>
                <div className='BtnComponent'>
                <div className='beforeBtn'>
                    <a href='/MBTIDetail'>
                        <div className='title'>111</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href='/MbtiSW'>
                        <div className='title'>222</div>
                        <div className='BtnCircle'>&#8594;</div>
                    </a>
                </div>
                <SocialIcons />
            </div>
            <Footer />
        </div>
    );
};

export default Mbticareerpaths;