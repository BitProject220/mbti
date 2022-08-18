import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import LoginPage from '../Login/LoginPage';

const LoginPageMain = () => {
    return (
        <div>
           <Header/>

           <LoginPage/>

           <Footer/> 
        </div>
    );
};

export default LoginPageMain;