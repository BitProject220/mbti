import React from 'react';
import '../css/contact/Contact.css';
import '../css/reset.css';
import facebook from '../image/facebook.png';
import twitter from '../image/twitter.png';
import instagram from '../image/instagram.png';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <main className='contact_page'>
            <div className='contact_div_css'>
                <h1 className='contact_input_tag'>연락처</h1>
                <p className='contact_p_tag'>
                    궁금하신 사항이나 문의사항이 있으시면 망설임 없이 연락 주시기 바랍니다.
                    저희는 저희 앞으로 발송되는 모든 문의 사항들을 하나하나 꼼꼼히 확인합니다.
                    당신의 소중한 의견 기다리고 있겠습니다. 현재 영어로 작성된 이메일에 한해서만 답변이 가능합니다.
                    이 점 많은 양해 부탁드립니다.
                </p>
                <div className='email_Click'>
                    <Link to='/' className='email_Link'>support@16personalities.com</Link>
                </div>
                <div className='company-info'>
                    <div className='name'>NERIS Analytics Limited</div>
                    <div className='address'>Nine Hills Road, Cambridge, CB2 1GE, United Kingdom</div>
                    <div className='registration'>Registered in England and Wales, #8646330</div>
                </div>

                <div >
                    <div >
                        <div className='icon_Div'>
                            <Link to='/' className='icon facebook'><img className='facebook' alt='facebook' src={facebook} style={{width:'50px'}}/></Link>
                            <Link to='/' className='icon twitter'><img className='twitter' alt='twitter' src={twitter} style={{width:'50px'}}/></Link>
                            <Link to='/' className='icon instagram'><img className='instagram' alt='instagram' src={instagram} style={{width:'50px'}}/></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    );
};

export default Contact;
