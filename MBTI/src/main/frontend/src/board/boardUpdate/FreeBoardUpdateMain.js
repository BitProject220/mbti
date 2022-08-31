import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import FreeBoardUpdate from './FreeBoardUpdate';

const FreeBoardUpdateMain = () => {


    return (
        <div>
            <Header />
            <FreeBoardUpdate />
            <Footer />
            
        </div>
    );
};

export default FreeBoardUpdateMain;