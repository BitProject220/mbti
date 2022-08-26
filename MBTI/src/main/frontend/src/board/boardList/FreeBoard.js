import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import Board from './components/Board';
import '../css/board.css';

const FreeBoard = () => {
    return (
        <div classNameName='FreeBoard'>
            <Header />
            <Board boardName='자유게시판' />
            <Footer />
        </div>
    );
};

export default FreeBoard;