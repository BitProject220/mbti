import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import TypeGroup from './components/TypeGroup';



function ProfilesMain() {
    return (
        <div className='profilesMain'>
            <Header />
            <TypeGroup type='분석가형'/>           
            <TypeGroup type='외교관형'/>           
            <Footer />
        </div>
    );
}

export default ProfilesMain;