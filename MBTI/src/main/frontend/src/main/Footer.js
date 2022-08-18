import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main/footer.css';
import '../css/reset.css';
import facebook from '../img/sns/facebook.png';
import insta from '../img/sns/instagram.png';
import twitter from '../img/sns/twitter.png';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='FooterContents'>
                <div className='FooterTitle'>©2022 BITCAMP MBTI TEAM</div>
                <nav className='FooterLinks'>
                    <ul>
                        <li>
                            <Link to='/ContactMain'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to='/'>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to='/'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to='/'>For Teams</Link>
                        </li>
                    </ul>
                </nav>

                <div className='FooterSocial'>
                    <Link to='/' className='FaceBook'><img src={facebook} className='FacebookImg' /></Link>
                    <Link to='/' className='Insta'><img src={insta} className='InstaImg' /></Link>
                    <Link to='/' className='Twitter'><img src={twitter} className='TwitterImg' /></Link>
                </div>

                <div className='FooterAlert'>
                    <strong>주의사항</strong>
                    : 웹 사이트의 모든 비영어 버전에는 사용자가 제출한 자동 번역 또는 번역이 포함되어 있습니다. <br/>
                    어떤 식으로든 구속력이 없고 정확성이 보장되지 않으며 법적 효력이 없습니다. 
                    공식 텍스트는 웹 사이트의 영어 버전입니다. <Link to='/' className='FooterEmail'>bitcampmbtiteam@bitcamp.com</Link>으로 부정확한 내용을 보고하거나 번역 프로젝트에 참여하세요!
                </div>
            </div>
        </footer>
    );
};

export default Footer;