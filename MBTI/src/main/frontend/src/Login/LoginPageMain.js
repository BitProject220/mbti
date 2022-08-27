import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import LoginPage from '../Login/LoginPage';
import Header2 from '../main/Header2';

const LoginPageMain = () => {
    return (
        <div>
           <Header2/>

           <LoginPage/>

           <Footer/> 
        </div>
    );
};

export default LoginPageMain;