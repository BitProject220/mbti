import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/main/header.css';
import '../css/reset.css';
import ContactMain from '../Contact/ContactMain';
import logo from '../img/logo/BWTH_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


    return (
        <header className='Header'>
            <div className='Menubar'>

                <nav className='Navigation'>
                    <ul>
                        <li className='MenuBarList1'>
                            <Link to='/test' className='MenuBarSub'>성격 유형 검사</Link>
                        </li>
                        <li className='MenuBarList2'>
                            <Link to='/ProfilesMain' className='MenuBarSub'>성격 유형</Link>
                        </li>
                        <li className='MenuBarList3'>
                            <Link to='#' className='MenuBarSub'>커뮤니티</Link>
                            <div className='DropDown'>
                                <Link to='/FreeBoard' className='FreeBoardList'>자유 게시판</Link>
                                <Link to='/MbtiBoard' className='MbtiBoardList'>MBTI별 게시판</Link>
                            </div>
                        </li>
                        <li className='MenuBarList4'>
                            <Link to='/' className='MenuBarSub'>매치하기</Link>

                        </li>
                    </ul>
                </nav>
                
                <div className='LogoImage'>
                    <Link to='/'><img src={logo} className='LogoImg' /></Link>
                </div>

                <div className='Login'>
                    <div>

                        <button className='LoginBtn'>Log Out</button> {/* 메인에선 안 보이게, 로그인하면 로그아웃 뜨게 */}

                    </div>
                    <div className='UserBtn'>
                        <Link to='/MyPageMain'><FontAwesomeIcon icon={faCircleUser} size="2x" className='UserImg'/></Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;