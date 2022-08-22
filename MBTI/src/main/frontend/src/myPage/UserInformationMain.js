import React from 'react';
import UserInformation from './UserInformation';
import Header from '../main/Header';
import Footer from '../main/Footer';

const UserInformationMain = () => {
    return (
        <div className='UserInformationMain'>
            <Header />
            <UserInformation />
            <Footer />
            
        </div>
    );
};

export default UserInformationMain;