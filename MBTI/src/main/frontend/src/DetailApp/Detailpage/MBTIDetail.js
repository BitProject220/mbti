import React from 'react';
import '../../css/detail/detatil.css';
import '../../css/reset.css';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import MainContent from './MainContent';
import RightBtn from './RightBtn';
import SidevarLeft from './SidevarLeft';
import SidevarRight from './SidevarRight';
import SocialIcons from './SocialIcons';

const MBTIDetail = () => {
    
    return (
        <div>
            <Header />
            <div style={{
             backgroundColor : 'red',
             height :  300,
             }}>이미지영역
             </div>
            <div className='sticky'>           
                <SidevarLeft />
                <MainContent />    
            </div>
            <div className='BtnComponent'>
                <RightBtn />
                <SocialIcons />
            </div>
            <Footer />
        </div>
    );
};

export default MBTIDetail;