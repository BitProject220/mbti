import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import Contact from '../Contact/Contact';
import background from '../image/mbti-image.png';
const ContactMain = () => {
    return (
        <div>
            <Header/>

            <Contact/>
            <img src={background} className='BackgroundImg'/>

            <Footer/>
        </div>
    );
};

export default ContactMain;
