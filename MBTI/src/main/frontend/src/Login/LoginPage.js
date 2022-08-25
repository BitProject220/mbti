import React, { useState, useForm } from 'react';
import { Link } from 'react-router-dom';
import '../css/login/login.css';
import message_icon from '../image/message_icon.png';
import password_icon from '../image/password_icon.png';
import {REST_API_KEY, REDIRECT_URI} from './KakaoLoginData';
import bluemessage from '../image/bluemessage_icon.png';
import redmessage from '../image/redmessage_icon.png';
import bluepassword from '../image/bluepassword_icon.png';
import redpassword from '../image/redpassword_icon.png';
import background from '../img/background/backgroundColor.png';
// import kakaoLoginBtn from '../image/KaKao_Login_Btn.png';
import axios from 'axios';

const LoginPage = () => {
    //이메일 유효성검사
    const checkEmail = (e) => {
        const regExp1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        //console.log('이메일 유효성 검사 :: ', regExp1.test(e.target.value));
        
        //이메일 유효성체크
        const emailValue = document.getElementById('login_input_tag');
        regExp1.test(e.target.value) ?  emailValue.style.borderColor = '#4298b4' :  emailValue.style.borderColor = '#f25e62';

       //이메일 유효성체크시 img변환
        regExp1.test(e.target.value) ?  document.getElementById('icon_Email').src = bluemessage : document.getElementById('icon_Email').src = redmessage;

    }

    //비밀번호 유효성 검사
    const checkPassword = (e) => {
        //  8 ~ 15자 영문, 숫자, 특수문자 조합
        var regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        // 형식에 맞는 경우 true 리턴
        //console.log('비밀번호 유효성 검사 :: ', regExp2.test(e.target.value));

        //비밀번호 유효성 검사
        const passwordValue = document.getElementById('login_input_password');
        regExp2.test(e.target.value) ? passwordValue.style.borderColor = '#4298b4' : passwordValue.style.borderColor = '#f25e62';
        //비밀번호 유효성체시 img변환
        regExp2.test(e.target.value) ? document.getElementById('icon_Password').src = bluepassword : document.getElementById('icon_Password').src = redpassword;

    }

    const LoginButtonClick = (e) => {
        e.preventDefault();
        if(document.getElementById('login_input_tag').value === ''){
            alert('이메일입력해주세요');
            document.getElementById('login_input_tag').focus();
        }else if(document.getElementById('icon_Email').src === redmessage){
            alert('이메일 형식이 맞지 않습니다.');
        }else if(document.getElementById('icon_Password').src === redpassword){
            alert('비밀번호는 특수문자 1자를 포함하여 8자 이상 15자 이하로 입력하세요.')
        }else if(document.getElementById('login_input_password').value === ''){
            alert('비밀번호를 입력해주세요');
            document.getElementById('login_input_password').focus();
        }else {
            // axios({
            //     methodL'post',
            //     url: 'http://localhost:8080/user/login',
            //     data: ({
            //         'email': email,
            //         'password': password,
            //     })
            // }).then(() => {

            // })
        }
    }

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    /* REDIECT_URL은 카카오 로그인페이지에서 로그인한 후에 get방식으로 params에 인가코드를 넣어서 보낼 URL이라고 생각하면 된다. */
    return (
        <div className='ContentsMainTitle' style={{backgroundImage:`url(${background})`}}>
        <div className='modaltest'>
        <div className='modal_dialog'>
            <form className='login_form'>
                <div className='login_head'>
                    <h3 className='modal_title'>로그인</h3>
                </div>

                <div className='login_body'>
                    <p className='p_tag'>
                    아직 회원이 아니십니까? 회원가입을 먼저 해주세요 &nbsp;
                    <br/>
                    </p>
                    <div className='login_email_input'>
                        <label className='login_label_tag'>
                            이메일 주소
                            <span></span>
                        </label>
                        
                        <div className='input_row'>
                            <input type='email' placeholder='your@email.com' className='login_input_tag' id='login_input_tag' value={email} onChange={checkEmail} />
                            <span className='input_icon'><img src={message_icon} className='icon' id='icon_Email'/></span>
                        </div>
                    </div>

                    <div className='login_email_input'>
                        <label className='login_label_tag'>
                            비밀번호
                            <span></span>
                        </label>
                        <div className='input_row'>
                            <input type='password' placeholder='********' className='login_input_tag' id='login_input_password' value={password} onChange={checkPassword}/>
                            <span className='input_icon'><img src={password_icon} className='icon' id='icon_Password'/></span>
                        </div>
                        <p className='input_note'>초기 비밀번호는 테스트 결과와 함께 이메일에 있습니다.</p>
                    </div>

                </div>

                <div className='login_bottom'>
                    <button className='login_Btn' onClick={(LoginButtonClick)}>
                        <span className='font-size'>로그인</span>
                    </button>

                    <a href={KAKAO_AUTH_URL} className='kakaoLogin_Btn'>
                         <div className='kakao_btn'></div> 
                    </a>

                    <button className='signUp_Btn'>
                       <Link to='/signUp' className='link_login'>회원가입</Link> 
                    </button>

                    <button className='find_password_Btn'>
                        <Link to='/FindPasswordMain' className='link_findPassword'>비밀번호를 잊으셨나요?</Link>
                    </button>
                </div>
            </form>  
        </div>
    </div>
    </div>
    );
};

export default LoginPage;