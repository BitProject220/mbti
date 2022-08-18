import React from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/myPage.css';

const Mypage = () => {
    return (
        <div style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 300px'}}>
            <div className='myPage'>
                <div className='myPageTop'>
                    <h1>마이페이지</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Mypage;