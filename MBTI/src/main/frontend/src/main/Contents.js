import React from 'react';
import '../css/reset.css';
import '../css/main/contents.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import background from '../img/background4.png';

const Contents = () => {
    return (
        <main className='ContentsMain'>
            <div className='ContentsMainTitle'>
                <div className='ContentsMainTitleText'>
                    <h1>MBTI 믑티의 검사가 너무 정확해 "살짝 소름이 돋을 정도예요"라고 성격 유형 검사를 마친 한 참여자는 말했습니다.</h1>
                    <p class="subtitle">쉽고 간단하면서도 정확한 성격 유형 검사를 통해 당신이 누구이며, 왜 그러한 특정 행동 성향을 보이는지 확인하십시오.</p>
                </div>
                <div className='TestStart'>
                    <Link to='/' className='TestStartBtn'>검사 실시 
                    <span><FontAwesomeIcon icon={faArrowRight} className='ArrowRightBtn'/></span>
                    </Link>
                </div>
            </div>
            <img src={background} className='BackgroundImg'/>
        </main>
    );
};

export default Contents;