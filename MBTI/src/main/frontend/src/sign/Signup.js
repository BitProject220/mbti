import React, { useState } from 'react';
import '../css/signup/signup.css';
import '../css/reset.css';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faQuestion } from "@fortawesome/free-solid-svg-icons";
import arrow from '../img/signup/downArrow.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import ModalPg from './ModalPg';
import ModalPg2 from './ModalPg2';
import axios from 'axios';


const Signup = (props) => {
    const qs = require('qs');

    const mailnumCheck = false;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('');
    const [emailNum, setEmailNum] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    /* const onInputName = (e) => {
        const {value} = e.target
        setName(value)
    } */

    /* const onInputEmail = (e) => {
        const {value} = e.target
        setEmail(value)
    } */

    const [age, setAge] = useState({
        default: 13
      });

    let ages = [];
    for (let d = 13; d <= 100; d += 1) {
        if (d < 100) {
            ages.push(d.toString());
        }
        else {
            ages.push(d.toString()+"+");
        }
    }

    /* const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const [Selected2, setSelected2] = useState("");

    const handleSelect2 = (e) => {
        setSelected2(e.target.value);
    }; */

   /*  const [selected3, setSelected3] = useState(''); */

    const handleSelect3 = (e) => {
        setGender(e.target.value);
        console.log(e.target.value);
    };

    const [selected4, setSelected4] = useState(null);

    const handleSelect4 = (e) => {
        setSelected4(!selected4);
        console.log(!selected4)
    };
    

      const FormCheckText = styled.span`
        font-size: 18px;
        width: 110px;
        height: 40px;
        background: #e6e6e6;
        border-radius: 40px 0px 0px 40px;
        border: none;
        display: inline-block;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #777;
        `;

        const FormCheckText2 = styled.span`
        font-size: 18px;
        width: 110px;
        height: 40px;
        background: #e6e6e6;
        border-radius: 0px 40px 40px 0px;
        border: none;
        display: inline-block;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #777;
        `;

        const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
        &:checked {
            display: inline-block;
            background: none;
            padding: 0px 10px;
            text-align: center;
            height: 35px;
            line-height: 33px;
            font-weight: 500;
            display: none;
        }

        &:checked + ${FormCheckText} {
            background: #3ab8cf;
            color: #fff;
        }

        &:checked + ${FormCheckText2} {
            background: #3ab8cf;
            color: #fff;
        }
        display: none;
        `;


        const [modalShow, setModalShow] = React.useState(false);


        //이메일 입력&유효성
          const [emailError, setEmailError] = useState(false);
          const onChangeEmail = (e) => {
            const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
            else setEmailError(true);
            setEmail(e.target.value);
        };

        //이름입력&유효성
        const [nameError, setNameError] = useState(false);
        const onChangeName = (e) => {
            if(e.target.value.length >= 1) setNameError(false);
            else setNameError(true);
            setName(e.target.value);
        }

        //이메일 인증버튼 눌렀을때
        /* const onEmailCheck = () => {
            setShow(true);
        } */

        //이메일 인증번호버튼 눌렀을때
        const onEmailNumCheck = () => {}

        //이메일 인증칸 입력 & 유효성
        const [emailCheckError, setEmailCheckError] = useState(false);
        const onChangeEmailNumCheck = (e) => {
            if(e.target.value.length >= 1) setEmailCheckError(false);
            else setEmailCheckError(true);
            setEmailNum(e.target.value);
        }

        //비밀번호 인증칸 입력 & 유효성
        
        const [passwordError, setPasswordError] = useState(false);
        const onChangeSignPwd = (e) => {
        //비밀번호
        const passwordRegex = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
        
        if (!e.target.value || passwordRegex.test(e.target.value) && password.length >= 8) setPasswordError(false);
        else setPasswordError(true);
        setPassword(e.target.value);
        };

        //비밀번호 확인
        const [passwordCheckError, setPasswordCheckError] = useState(false);

        const onChangeSignPwdCheck = (e) => {
            if(e.target.value === password) setPasswordCheckError(false);
            else setPasswordCheckError(true);
            setPasswordCheck(e.target.value);
        }

    
        /* const isValidInput = name.length >= 1 && email.length >= 1 && gender.value.length >= 1; */
        const nameCh = name.length >= 1;
        const emailCh = email.length >= 1;
        const genderCh = gender.length >= 1;
        const passwordCh = password.length >= 1;
        const passwordCheckCh = passwordCheck.length >= 1;

        const getIsActive = 
        setEmailError && setNameError && setPasswordError && nameCh && emailCh && genderCh && passwordCh && passwordCheckCh === true;

         const handleButtonValid = (e) => {
            
            e.preventDefault();
            if (!nameCh) {
                alert('이름 또는 별명을 입력하세요.');
            }
            else if (!emailCh) {
                alert('이메일을 입력하세요.');
            }
            else if (emailError) {
                alert('이메일 형식이 맞지 않습니다.');
            }
            else if (nameError) {
                alert('이름 또는 별명을 입력하세요.');
            }
            else if (!passwordCh) {
                alert('비밀번호를 입력하세요.');
            }
            else if (passwordError) {
                alert('비밀번호는 특수문자 1자를 포함하여 8자 이상 입력하세요.');
            }
            else if (!passwordCheckCh) {
                alert('비밀번호 확인을 하세요.');
            }
            else if(passwordCheckError) {
                alert('비밀번호가 맞지 않습니다.');
            }
            else if(gender === '') {
                alert('성별을 선택하세요.');
            }

            else {
               axios({
                method: 'POST',
                    url:  'http://localhost:8080/user/write',
                     data: ({
                        'name': name,
                        'email': email,
                        'password': password,
                        'age': age.default,
                        'gender': gender,
                    })
                 }).then(()=>{
                    //  navigate("/SignupSuccess", { state: { name: name , email: email }});
                    console.log("확인!")
                 }).catch(error =>{
                    console.log(error)
                 })

                 
                console.log(email);
            };
        } 

        /* const handleButtonValid = async (values) => {
            const {email, name, age, gender} = values;
            try {
              await axios.post("/api/auth/signup", {
                email,
                name,
                age,
                gender
              });
              
              
                navigate("/SignupSuccess");
        
            } catch (e) {
              
              toast.error(e.response.data.message + "😭", {
                position: "top-center",
              });
            }
          }; */

    
    
    return (
        <div className='container'>
            <h1 className='underlined'>회원가입</h1>
            <div>
                <form>
                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">이름 : </label>
                        <div className='input__row' data-v-4d142efa="">
                            <input type='text' id='signName' name='name' value={ name } onChange={ onChangeName } placeholder='Your Name' />
                        </div>
                        <p className='input__note' data-v-4d142efa="">
                            어떻게 불러야 할지 알기 위함입니다. 당신이 원한다면 별명을 입력하셔도 됩니다.
                        </p>
                        {nameError && <p class="invalid-input" style={{fontSize:'0,9em', color:'red'}}>이름 또는 별명을 입력하세요.</p>}
                    </div>

                    <div className='sp-input inputgroup has--label emailBox' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">이메일 : </label>
                        <div>
                            <div className='input__row inputEmail' data-v-4d142efa="">
                                {/* <input id='emailInputBox' type='email' value={ email } onChange={ onInputEmail } placeholder='Your E-mail'></input> */}
                                <input id='emailInputBox' name='email' type='email' value={ email }  onChange={ onChangeEmail } placeholder='Your E-mail' />
                                
                                <FontAwesomeIcon icon={ faEnvelope } data-v-4d142efa="" className="sp-icon input__icon icon--md icon--inherit icon--envelope" id='icon' />
                            </div>
                            <div data-v-4d142efa="">
                                <button id='emailCheckBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ () => { setShow(true) } }>
                                    <span className='buttonText2'>인증</span>
                                </button>
                            </div>
                        </div>
                        { show?
                            <div>
                                <div>
                                    <input type='text' className='email_num_check' value={ emailNum }  onChange={ onChangeEmailNumCheck } placeholder="인증번호 6자리" maxlength="6" />
                                </div>
                                <div data-v-4d142efa="">
                                    <button id='emailNumCheckBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ onEmailNumCheck }>
                                        <span className='buttonText3'>확인</span>
                                    </button>
                                </div>
                            </div>
                            :null
                        }
                        <p className='input__note' data-v-4d142efa="" style={{marginTop:'1%'}}>
                            이메일 주소를 올바르게 입력했는지 다시 확인하세요. 입력한 이메일로 인증번호를 보낼 것입니다.
                        </p>
                       
                        {emailError && <p class="invalid-input" style={{fontSize:'0,9em', color:'red'}}>이메일 형식이 맞지 않습니다.</p>}
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">비밀번호 : </label>
                        <div className='input__row' data-v-4d142efa="">
                            <input type='password' id='signPassword' name='password' value={ password } onChange={ onChangeSignPwd } placeholder='비밀번호 8자리 이상 입력하세요.' />
                        </div>
                        {passwordError && <p class="invalid-input" style={{fontSize:'0,9em', color:'red'}}>특수문자 1자 이상, 전체 8자 이상 입력하세요.</p>}
                    </div>

                   
                    <div className='sp-input inputgroup has--label' data-v-4d142efa="" style={{marginTop:'-30px'}}>
                        <label className='input__label label' data-v-4d142efa="">비밀번호 확인: </label>
                        <div className='input__row' data-v-4d142efa="">
                            <input type='password' id='signPasswordCheck' name='passwordCheck' value={ passwordCheck } onChange={ onChangeSignPwdCheck } placeholder='비밀번호 8자리 이상 입력하세요.' />
                        </div>
                        <p className='input__note' data-v-4d142efa="">
                            비밀번호는 특수문자([`~!@@#$%^&*|₩₩₩'₩";:₩/?)를 포함하여 8자리 이상 입력하세요.
                        </p>
                        {passwordCheckError && <p class="invalid-input" style={{fontSize:'0,9em', color:'red'}}>비밀번호가 맞지 않습니다.</p>}
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">나이 : </label>
                        <div className='ageSelect'>
                           <select id='ageBox'
                                name='age'
                                value={age.default}
                                onChange={(e) =>
                                    setAge({ default: e.target.value })
                                }
                            >
                                {ages.map(item => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}

                                
                            </select>
                            <span id='arrowImg'><img src={ arrow } alt="" /></span>
                        </div>
                        <p className='input__note' data-v-4d142efa="">
                            귀하는 귀하의 국가에서 적용되는 법률에 따라 당사의 웹 사이트 사용에 동의하기에 충분한 13세 이상이어야 합니다.
                        </p>
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">성별 : </label>
                        {/* <div data-v-21faefa9="" className='group__options'>
                            <span className='maleSpan'>
                                <label htmlFor="male">
                                    <input
                                    type="radio"
                                    className='maleInput'
                                    value="male"
                                    checked={selected3 === 'male'}
                                    onChange={handleSelect3}
                                    />
                                    남
                                </label>
                            </span>

                            <input
                            type="radio"
                            value="female"
                            onChange={handleSelect3}
                            checked={selected3 === 'female'}
                            />
                            <label htmlFor="female">여</label>
                        </div> */}
                        <div style={{marginTop:'1.5%'}}>
                            <label>
                                <FormCheckLeft
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={handleSelect3}
                                />
                                <FormCheckText htmlFor="male" style={{textAlign:'center', lineHeight:2}}>남</FormCheckText>
                            </label>

                            <label>
                                <FormCheckLeft
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={handleSelect3}
                                    checked={gender === 'female'}
                                />
                                <FormCheckText2 htmlFor="female" style={{textAlign:'center', lineHeight:2}}>여</FormCheckText2>
                            </label>
                        </div>
                    </div>

    
                    <div className='sp-input inputgroup has--label' data-v-4d142efa="" style={{marginTop:'2.5%'}}>
                    <label className='input__label label' data-v-4d142efa="">개인정보 수집 및 이용에 동의하시겠습니까? </label>
                        <div className='toggle' style={{marginTop:'1.5%'}}>
                            <div className='toggleDiv'>
                                <input
                                type="checkbox"
                                name='toggle1'
                                id='toggle1'
                                checked={selected4}
                                onChange={handleSelect4}
                                />
                                <label className='label1' htmlFor="toggle1">아니오</label>
                                <span className='label2'>예</span>
                                
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <button id='conBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ handleButtonValid }>
                            <span className='buttonText'>회원가입</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='rightIcon' />
                        </button>
                        
                    </div>

                    <div className='policy'>
                        <p>당사는 귀하의 개인 데이터를 판매하거나 부적절하게 공유하지 않습니다. <br />
                        계속하면 당사의 <ModalPg /> 과 귀하가 당사의 <ModalPg2 />  을 읽었다는 것에 동의합니다.
                        </p>
                    </div>
                    {/* <ModalPg />
                    <ModalPg2 /> */}
                    
                </form>
            </div>

        </div>
    );
};

export default Signup;