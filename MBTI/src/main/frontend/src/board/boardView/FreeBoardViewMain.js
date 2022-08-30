import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import FreeBoardView from '../boardView/FreeBoardView';

const FreeBoardViewMain = (props) => {

    const location = useLocation();
    const seq = location.state.seq;
  

    return (
        <div>
            <Header/>
            <FreeBoardView/>
            <Footer/>
        </div>
    );
};

export default FreeBoardViewMain;