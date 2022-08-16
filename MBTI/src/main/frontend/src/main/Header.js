import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main/header.css';
import '../css/reset.css';
import ContactMain from '../Contact/ContactMain';
const Header = () => {
    return (
        <header className='Header'>
            <div className='Menubar'>
                <div className='LogoImage'>
                    <Link to='/'>로고크기맞추는중로크기맞추는중</Link>
                </div>
                
                <nav className='Navigation'>
                    <ul>
                        <li>
                            <Link to='/test' className='MenuBarSub'>성격 유형 검사</Link>
                        </li>
                        <li>
                            <Link to='/ProfilesMain' className='MenuBarSub'>성격 유형</Link>
                        </li>
                        <li>
                            <Link to='/ContactMain' className='MenuBarSub'>연락처</Link>
                        </li>
                    </ul>
                </nav>

                <div className='Login'>
                    <div>
                        <button className='LoginBtn'><Link to='/LoginPage'>Log In</Link></button>
                    </div>
                    <div className='TestBtn'>
                        <Link to='/'>Take the Test</Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;