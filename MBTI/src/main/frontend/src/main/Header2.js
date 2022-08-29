import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main/header.css';
import '../css/reset.css';
import logo from '../img/logo/BWTH_logo.png';

const Header2 = () => {
    return (
        <header className='Header'>
            <div className='Menubar2'>                
                <div className='LogoImage'>
                    <img src={logo} className='LogoImg2' />
                </div>
            </div>
        </header>
    );
};

export default Header2;