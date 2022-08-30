import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import Board from './components/Board';
import '../css/board.css';



const FreeBoard = () => {

const freeSearchBy = ["전체","제목","내용","작성자"];

    return (
        <div className='FreeBoard'>
            <Header />
            <Board boardNo='1' boardType='http://localhost:8080/board/freeBoardList' boardName='자유게시판' searchBy={freeSearchBy}/>
            <Footer />
        </div>
    );
};

export default FreeBoard;