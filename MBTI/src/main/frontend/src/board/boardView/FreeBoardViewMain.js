import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import FreeBoardView from '../boardView/FreeBoardView';

const FreeBoardViewMain = () => {
    const location = useLocation();
    var seq = location.state.seq;
    console.log("freeBoardView의 seq는 " + seq)
    return (
        <div>
            <Header/>
            <FreeBoardView freeSeq={seq}/>
            <Footer/>
        </div>
    );
};

export default FreeBoardViewMain;