import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import './css/board.css'

const BoardMain = () => {
    return (
        <div>
            <Header />
            <div className='BoardMainDiv'>
                <div className='freeBoardDiv'>자유게시판</div>
                <div className='mbtiBoardDiv'>MBTI별 게시판</div>
            </div>
            <Footer />
        </div>
    );
};

export default BoardMain;