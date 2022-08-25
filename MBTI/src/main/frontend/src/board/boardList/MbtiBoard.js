import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import Board from './components/Board';
import '../css/board.css';

const MbtiBoard = () => {
    return (
        <div className='FreeBoard'>
            <Header />
            <Board boardName='MBTI 게시판' />
            <Footer />
        </div>
    );
};

export default MbtiBoard;