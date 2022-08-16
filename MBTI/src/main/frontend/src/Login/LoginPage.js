import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login/login.css';
import message_icon from '../image/message_icon.png';
import password_icon from '../image/password_icon.png';


const LoginPage = () => {

    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        
    }

    return (
    <div className='modaltest'>
        <div className='modal_dialog'>
            <form className='login_form'>
                <div className='login_head'>
                    <h3 className='modal_title'>로그인</h3>
                    
                </div>

                <div className='login_body'>
                    <p className='p_tag'>
                    아직 회원이 아니십니까? 다음을 수행하여 회원가입을 해주세요 &nbsp;
                    <Link to='/' className='link_login' >성격 테스트 검사</Link>&nbsp;
                    또는&nbsp;
                    <Link to='/signUp' className='link_login'>회원가입</Link>
                    .
                    </p>
                    <div className='login_email_input'>
                        <label className='login_label_tag'>
                            이메일 주소
                            <span></span>
                        </label>
                        <div className='input_row'>
                            <input type='email' placeholder='your@email.com' className='login_input_tag' />
                            <span className='input_icon'><img src={message_icon} className='icon'/></span>
                        </div>
                    </div>

                    <div className='login_email_input'>
                        <label className='login_label_tag'>
                            비밀번호
                            <span></span>
                        </label>
                        <div className='input_row'>
                            <input type='password' placeholder='********' className='login_input_tag'/>
                            <span className='input_icon'><img src={password_icon} className='icon'/></span>
                        </div>
                        <p className='input_note'>Your initial password is in the e-mail with your test results.</p>
                    </div>

                </div>

                <div className='login_bottom'>
                    <button className='login_Btn'>
                        <span className='font-size'>로그인</span>
                    </button>

                    <button className='find_password_Btn'>
                        비밀번호를 잊으셨나요?
                    </button>
                </div>
            </form>  
        </div>
    </div>
    );
};

export default LoginPage;