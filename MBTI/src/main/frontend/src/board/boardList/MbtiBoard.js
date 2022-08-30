import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import Board from './components/Board';
import '../css/board.css';

const MbtiBoard = () => {

    const MbtiSearchBy = ["전체","제목","내용","작성자","타입"];

    return (
        <div className='MbtiBoard'>
            <Header />
            <Board boardNo='2' boardType='http://localhost:8080/board/mbtiBoardList' boardName='MBTI 게시판' searchBy={MbtiSearchBy} />
            <Footer />
        </div>
    );
};

export default MbtiBoard;
