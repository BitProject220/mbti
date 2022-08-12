import React from 'react';
import '../css/reset.css';
import '../css/main/contents.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import background from '../img/backgroundColor.png';

const Contents = () => {
    return (
        <main className='ContentsMain'>
            <div className='ContentsMainTitle' style={{backgroundImage:`url(${background})`}}>
                <div className='ContentsMainTitleText'>
                    <h1>What's your MBTI?</h1>
                    <p class="subtitle">Check it out!</p>
                </div>
                <div className='TestStart'>
                    <Link to='/' className='TestStartBtn'>Take the Test <span><FontAwesomeIcon icon={faArrowRight} className='ArrowRightBtn'/></span> </Link>
                    
                </div>
            </div>
        </main>
    );
};

export default Contents;