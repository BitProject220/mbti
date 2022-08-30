import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import MymbtiResult from './MymbtiResult';

const MyResultPageMain = () => {
    return (
        <div className='myResultpageMain'>
            <Header />
            <MymbtiResult />
            <Footer />
        </div>
    );
};

export default MyResultPageMain;