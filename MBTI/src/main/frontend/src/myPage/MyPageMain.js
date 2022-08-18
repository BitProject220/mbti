import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Mypage from './Mypage';

const MyPageMain = () => {
    return (
        <div className='myPageMAin'>    
            <Header />
            <Mypage />
            <Footer />
        </div>
    );
};

export default MyPageMain;