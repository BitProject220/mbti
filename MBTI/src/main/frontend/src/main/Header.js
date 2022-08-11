import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main/header.css';
import '../css/reset.css';

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
                            <Link to='/'>성격 유형 검사</Link>
                        </li>
                        <li>
                            <Link to='/Profiles'>성격 유형</Link>
                        </li>
                        <li>
                            <Link to='/'>연락처</Link>
                        </li>
                    </ul>
                </nav>

                <div className='Login'>
                    <div>
                        <button className='LoginBtn'>Log In</button>
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