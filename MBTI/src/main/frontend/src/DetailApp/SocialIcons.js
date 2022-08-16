import React, { useState } from 'react';
import '../css/detail/detatil.css';
import '../css/reset.css';

const SocialIcons = () => {

    const [count, setCount] = useState(0);

    const onCount = ()=>{
        setCount(count => count+1);
    }

    return (
        <div>
            <div className='wrapper'>
                    <div className='social'>
                        <div className='social-count'>
                            <div className='social-number'>{count}</div>
                            <div className='social-p'>SHARES</div>
                        </div>
                        <div className='social-icons'>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } className="btn_comm"><img src={require('../img/detail_facebook_share.png') } alt='페이스북 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } className="btn_comm"><img src={require('../img/detail_twitter_share.png') } alt='트위터 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } className="btn_comm"><img src={require('../img/detail_pinterest_share.png') } alt='핀터레스트 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } className="btn_comm"><img src={require('../img/detail_discode_share.png') } alt='디스코드 공유하기'/></button></a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SocialIcons;