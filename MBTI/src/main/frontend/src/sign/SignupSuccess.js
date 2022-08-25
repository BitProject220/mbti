import React from 'react';
import '../css/signup/signup.css';
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SignupSuccess = () => {
    
    const {state} = useLocation();
    const { name, email } = state;

    console.log(email);
    console.log(name);
    const navigate = useNavigate();

    const handleButtonValid2 = (e) => {
        
        
            navigate("/");
       
    }
    return (
        <div className='container'>
            <h1 className='underlined'>회원가입</h1>
            <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                <p className='input__note' data-v-4d142efa="" style={{lineHeight:'3'}}>
                    <strong>{ state.name }</strong>님 저희와 함께해 주셔서 감사합니다!<br />
                    입력하신 이메일로 로그인을 진행하세요.<br />
                    성격유형검사는 로그인 후 가능합니다. <br />
                    <span style={{color:'#555', fontSize:'1.5em'}}> <strong>{ state.email }</strong></span>
                </p>
            
            </div>

            <div className='sp-input inputgroup has--label' data-v-4d142efa="" style={{marginTop:'5%', marginBottom:0}}>
                <button id='conBtn' type='submit' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ handleButtonValid2 }>
                    <span className='buttonText' type='submit'>로그인</span>
                    <FontAwesomeIcon icon={ faArrowRight } className='rightIcon' />
                </button>
                
            </div>
            
        </div>
    );
};

export default SignupSuccess;