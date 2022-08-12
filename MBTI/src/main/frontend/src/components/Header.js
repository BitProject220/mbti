import React from 'react';
import { Link } from 'react-router-dom';
import Test01 from './Test01';
import Test02 from './Test02';
import Test03 from './Test03';

// display: inline-block;
//     position: absolute;
//     transform: translate(-50%, -50%);
//     top: 33px;
//     left: 50%;


const Header = () => {
    return (
        <div>
            <div className='header'>
                <Link to="/"><img src={process.env.PUBLIC_URL + '/image/mbti_logo.png'} alt='logo_img' ></img></Link>
            <div className='Gnb'>
                <ul>
                    <li><Link to="/Test01">성격유형검사</Link></li>
                    <li><Link to="/Test02">성격유형</Link></li>
                    <li><Link to="/Test03">연락처</Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;