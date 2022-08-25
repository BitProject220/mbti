import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import FreeBoardView from '../boardView/FreeBoardView';

const FreeBoardViewMain = () => {
    return (
        <div>
            <Header/>
            <FreeBoardView/>
            <Footer/>
        </div>
    );
};

export default FreeBoardViewMain;