import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import MbtiBoardView from '../boardView/MbtiBoardView';

const MbtiBoardViewMain = (props) => {
    const location = useLocation();
    const seq = location.state.seq;
    console.log("MbtiBoardView의 seq는 " + seq)
    return (
        <div>
            <Header/>
            <MbtiBoardView/>
            <Footer/>
        </div>
    );
};

export default MbtiBoardViewMain;