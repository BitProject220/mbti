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
            <img src={data.url} alt='aa' style={{ width: 80+'%', height: 300,}} />
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
                        <a href='/MbtiSW' className='atherside' id='1'><li >강점과 약점</li></a>
                        <a href='/MbtiRelationships' className='thispage'><li >로맨틱한 관계</li></a>
                        <a href='/Mbtifriendship' className='atherside'><li >우정</li></a>
                        <a href='/Mbtiparenthood' className='atherside'><li >육아</li></a>
                        <a href='/Mbticareerpaths' className='atherside'><li >직업</li></a>
                        <a href='/Mbtiworkplacehabits' className='atherside'><li >직장 습관</li></a>
                        <a href='/Mbticonclusion' className='atherside'><li >전체 프로필</li></a>
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