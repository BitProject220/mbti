import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Contact from '../Contact/Contact';
import contactBackground from '../image/contactBackground.png';

const ContactMain = () => {
    return (
        <div>
            <Header/>

            <Contact/>
            <img src={contactBackground} className='contactBackground'/> 

            <Footer/>
        </div>
    );
};

export default ContactMain;
