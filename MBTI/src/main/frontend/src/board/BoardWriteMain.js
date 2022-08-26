import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import BoardWrite from './BoardWrite';

const BoardWriteMain = () => {
    return (
        <div>
            <Header />
            <BoardWrite/>
            <Footer />
        </div>
    );
};

export default BoardWriteMain;