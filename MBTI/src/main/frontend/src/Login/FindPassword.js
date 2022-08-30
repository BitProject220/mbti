import React, { useState, useForm } from 'react';
import { Link } from 'react-router-dom';
import '../css/login/findPassword.css';
import message_icon from '../image/message_icon.png';
import bluemessage from '../image/bluemessage_icon.png';
import redmessage from '../image/redmessage_icon.png';
import background from '../img/background/backgroundColor.png';
import axios from 'axios';

const qs = require('qs');//String 타입으로 변환

const FindPassword = (props) => {
    let [code, setCode] = useState('');
    
    //이메일 유효성 검사
    const findCheckEmail = (e) => {
        const emailValue1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', emailValue1.test(e.target.value));

        //이메일 유효성체크
        const emailValue2 = document.getElementById('findPassword_input_tag');
        emailValue1.test(e.target.value) ?  emailValue2.style.borderColor = '#4298b4' :  emailValue2.style.borderColor = '#f25e62';

       //이메일 유효성체크시 img변환
       emailValue1.test(e.target.value) ?  document.getElementById('findPassword_icon_Email').src = bluemessage :  document.getElementById('findPassword_icon_Email').src = redmessage;

    }
    const findPasswordButtonClick = (e) => {
        e.preventDefault();
        if(document.getElementById('findPassword_input_tag').value === ''){
            alert('이메일을입력해주세요');
            document.getElementById('findPassword_input_tag').focus();
        }else if(document.getElementById('findPassword_icon_Email').src === redmessage){
            alert('이메일 형식이 맞지 않습니다');
            document.getElementById('findPassword_input_tag').focus();
        }else{
            axios({
                method: 'POST',
                url: 'http://localhost:8080/user/findPasswordEmailCheck',
                data: qs.stringify({
                    'email': document.getElementById('findPassword_input_tag').value,
                })
            }).then((res)=>{
                console.log(res.data);
                if((res.data) == ''){
                    alert('찾고자하는 이메일이 없습니다');
                }else{
                    alert('이메일로 비밀번호를 보냈습니다');
                    sessionStorage.setItem("email",res.data.email);
                    axios({
                        method:'POST',
                        url: 'http://localhost:8080/user/findPasswordEmailSend',
                        data: qs.stringify({
                            'email': document.getElementById('findPassword_input_tag').value,
                        })
                    }).then((res)=>{
                       //console.log("data는?" + res.data);
                        code = JSON.stringify(res.data);
                        setCode(code);
                        //console.log(code);
                    }).catch(error => {
                        console.log(error);
                    })
                }
            }).catch(error => {
                alert(error);
            })
        }
    }
    return (
        <div className='ContentsMainTitle' style={{backgroundImage:`url(${background})`}}>
        <div className='findPassword_Main'>
        <div className='findPassword_dialog'>
            <form className='findPassword_form'>
                <div className='findPassword_head'>
                    <h3 className='findPassword_title'>비밀번호를 잃어버렸나요?</h3>
                    
                </div>

                <div className='findPassword_body'>
                    <p className='findPassword_p_tag'>
                    재설정 링크를 받으려면 전자 메일 주소를 입력하십시오. &nbsp;
                    <br/>
                    </p>
                    <div className='findPassword_email_input'>
                        <label className='findPassword_label_tag'>
                            이메일 주소
                            <span></span>
                        </label>
                        
                        <div className='findPassword_input_row'>
                            <input type='email' placeholder='your@email.com' className='findPassword_input_tag' id='findPassword_input_tag' onChange={findCheckEmail}/>
                            <span className='findPassword_input_icon'><img src={message_icon} className='findPassword_icon' id='findPassword_icon_Email'/></span>
                        </div>
                    </div>

                </div>

                <div className='findPassword_bottom'>
                    <button className='findPassword_Btn' onClick={findPasswordButtonClick}>
                        <span className='findPassword_font-size'>링크 보내기</span>
                    </button>

                    <button className='goBack_login'>
                        <Link to='/LoginPageMain' className='goBack_login_Btn'>로그인으로 돌아가기</Link>
                    </button>
                </div>
            </form>  
        </div>
    </div>
    </div>
    );
};

export default FindPassword;