import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main/header.css';
import '../css/reset.css';
import logo from '../img/logo/BWTH_logo.png';
const Header = () => {
    return (
        <header className='Header'>
            <div className='Menubar'>

                <nav className='Navigation'>
                    <ul>
                        <li>
                            <Link to='/test' className='MenuBarSub'>성격 유형 검사</Link>
                        </li>
                        <li>
                            <Link to='/ProfilesMain' className='MenuBarSub'>성격 유형</Link>
                        </li>
                        <li>
                            <Link to='/' className='MenuBarSub'>연락처</Link>
                        </li>
                    </ul>
                </nav>
                
                <div className='LogoImage'>
                    <img src={logo} className='LogoImg' />
                </div>

                <div className='Login'>
                    <div>
                        <button className='LoginBtn'>Log In</button>
                    </div>
                    <div className='TestBtn'>
                        <Link to='/test'>Take the Test</Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;