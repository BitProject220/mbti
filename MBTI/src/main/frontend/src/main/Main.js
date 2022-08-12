import React from 'react';
import LoginPage from '../Login/LoginPage';
import Footer from '../main/Footer';
import Header from '../main/Header';

const Main = () => {
    return (
        <div className='Main'>
            <Header/>
        
            <LoginPage/>
            
            <Footer/>

      </div>
    );
};

export default Main;