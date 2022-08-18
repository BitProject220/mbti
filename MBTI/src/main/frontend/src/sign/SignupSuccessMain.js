import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import SignupSuccess from './SignupSuccess';

const SignupSuccessMain = () => {
    return (
        <div className='SignupSuccessMain'>
            <Header />
            <SignupSuccess />
            <Footer />
        </div>
    );
};

export default SignupSuccessMain;