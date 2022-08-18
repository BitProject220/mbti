import React, { useEffect, useRef, useState } from 'react';
import '../css/reset.css';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Signup from './Signup';

const SignupMain = () => {


    return (
        <div className='signupMAin'>  
            <Header />
            <Signup />
            <Footer />
        </div>
    );
};

export default SignupMain;