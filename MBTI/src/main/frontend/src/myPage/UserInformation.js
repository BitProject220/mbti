import React, { useEffect, useRef, useState } from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/userInfo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import arrow from '../img/signup/downArrow.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import axios from 'axios';


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

const UserInformation = () => {

    const [age, setAge] = useState({
        default: '13'
      });
      let infoName2;
      let infoAge2;
    const [infoName, setInfoName] = useState('');
    const [infoEmail, setInfoEmail] = useState('');
    const [infoPassword, setInfoPassword] = useState('');
    const [infoRePassword, setInfoRePassword] = useState('');
    const [infoGender, setInfoGender] = useState('');
    const navigate = useNavigate();
    const [nameSet, setNameSet] = useState(true);
    const nameRef = useRef(null);
    const pwdRef = useRef(null);
    const rePwdRef   = useRef(null);


    const [currentEmail,setCurrentEmail] = useState('');
    const [currentName,setCurrentName] = useState('');
    const [currentGender,setCurrentGender] = useState('');
    const [currentPwd,setCurrentPwd] = useState(''); 

    /* const [userDTO, setUserDTO] = useState({}); */

    const qs = require('qs');
    useEffect( () => {     
        axios({
            method: 'POST',
            url: 'http://localhost:8080/user/userInfo',
            data: qs.stringify({'email' : sessionStorage.getItem("email")})
        }).then((res)=>{
    

            infoAge2=(res.data.age)
            document.getElementById('infoAgeBox').value = infoAge2
            setInfoGender(res.data.gender);
            setAge(res.data.age);
            setInfoEmail(res.data.email)
            setInfoName(res.data.name)

        }).catch(error =>{
            console.log(error)
        });
    }, []);
   
    let ages = [];
    for (let d = 13; d <= 100; d += 1) {
        if (d < 100) {
            ages.push(d.toString());
        }
        else {
            ages.push(d.toString()+"+");
        }
        
    }

    const handleSelect3 = (e) => {
        setInfoGender(e.target.value);
       
    };

    //????????????&?????????
    const [infoNameError, setInfoNameError] = useState(false);
    const onInfoName = (e) => {
        setNameSet(false);
        if(e.target.value.length >= 1) setInfoNameError(false);
        else setInfoNameError(true);
        setInfoName(e.target.value);
    }
    

    const onNameCheck = (e) => {
        e.preventDefault();
        if(infoName === ''){
            alert("????????? ???????????????");
        }
        else{
            axios({
                method: 'POST',
                url: 'http://localhost:8080/user/nameCheck',
                        data: qs.stringify({'name' : infoName})
            }).then((res)=>{
                
                if(res.data === "exist"){
                    alert('?????? ???????????? ??????????????????. ?????? ???????????????');
                    setInfoName('')
                    nameRef.current.focus()
                    setNameSet(false);
                }
                else if(res.data === "nonExist") {
                    alert('?????? ????????? ??????????????????.');
                    setNameSet(true);
                }
            }).catch(error =>{
                console.log(error)
            });
        }
    }

    //???????????? ????????? ?????? & ?????????
        
    const [infoPasswordError, setInfoPasswordError] = useState(false);
    const onInfoPwd = (e) => {
    //????????????
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    
    if (!e.target.value || passwordRegex.test(e.target.value) && infoPassword.length >= 8 && infoPassword.length <= 15) setInfoPasswordError(false);
    else setInfoPasswordError(true);
    setInfoPassword(e.target.value);
    };

    //???????????? ??????
    const [infoRepasswordCheckError, setInfoRePasswordCheckError] = useState(false);

    const onInfoRePwd = (e) => {
        if(e.target.value === infoPassword) setInfoRePasswordCheckError(false);
        else setInfoRePasswordCheckError(true);
        setInfoRePassword(e.target.value);
    }

    const nameCh = infoName.length >= 1;
    const genderCh = infoGender.length >= 1;
    const passwordCh = infoPassword.length >= 1;
    const passwordCheckCh = infoRePassword.length >= 1;

    const getIsActive = 
    setInfoNameError && setInfoPasswordError && nameCh && genderCh && passwordCh && passwordCheckCh === true;

     const userInfoModify = (e) => {
        
        e.preventDefault();
        if (!nameCh) {
            alert('?????? ?????? ????????? ???????????????.');
            nameRef.current.focus()
        }
        else if (infoNameError) {
            alert('?????? ?????? ????????? ???????????????.');
            nameRef.current.focus()
        }
        else if(nameSet === false){
            alert('?????? ?????? ????????? ??????????????? ?????????.');
        }
        else if (!passwordCh) {
            alert('??????????????? ???????????????.');
            pwdRef.current.focus()
        }
        else if (infoPasswordError) {
            alert('??????????????? ????????????(!@#$%^*+=-) 1?????? ???????????? ???????????? ????????? ???????????? 8??? ?????? 15??? ????????? ???????????????.');
            pwdRef.current.focus()
        }
        else if (!passwordCheckCh) {
            alert('???????????? ????????? ?????????.');
            rePwdRef.current.focus()
        }
        else if(infoRepasswordCheckError) {
            alert('??????????????? ?????? ????????????.');
            rePwdRef.current.focus()
        }
        else if(infoGender === '') {
            alert('????????? ???????????????.');
        }

        else {
            axios({
                method: 'POST',
                    url:  'http://localhost:8080/user/userUpdate',
                     data: ({
                        'name': infoName,
                        'email': infoEmail,
                        'password': infoPassword,
                        'age': age.default,
                        'gender': infoGender,
                    })
                 }).then(()=>{
                     sessionStorage.clear();
                     
                     alert("?????? ????????? ??????????????????.\n????????? ???????????? ???????????? ?????? ????????? ?????????.");
                     window.location.href="/"
                 }).catch(error =>{
                    console.log(error)
                 })
        };
    } 
    
    return (
        <div style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 300px'}}>
            <div className='userInfo'>
                <div className='userInfoTop'>
                    <h1>??????????????????</h1>
                </div>

                <div data-v-cbdfd9aa="" className="row__description" style={{marginTop: '60px'}}>
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>??????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle infoNameBox">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div className='inputInfoName' style={{verticalAlign: 'inherit'}}>
                                <input type='text' id='infoNameInputBox' value={infoName} name='infoName' placeholder='?????? ?????? ????????? ???????????????.' onChange={ onInfoName } ref={nameRef} />

                                <div data-v-4d142efa="">
                                <button id='nameCheckBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt email_num_check_box2" onClick={ onNameCheck }>
                                    <span className='buttonText4'>????????????</span>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <p style={{verticalAlign: 'inherit'}}>
                                ???????????? ?????? ?????? ??? ??? ?????? ?????? ?????? ?????? ???????????????.<br /> ??????????????? ????????? ???????????????. 
                            </p>
                            {infoNameError && <p className="invalid-input" style={{fontSize:'0,9em', color:'red'}}>?????? ?????? ????????? ???????????????.</p>}
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>????????? ????????? ??????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle infoEmailBox">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div className='inputInfoEmail' style={{verticalAlign: 'inherit'}}>
                                <input id='infoEmailInputBox' name='infoEmail' type='email' value={infoEmail} readOnly />
                                <FontAwesomeIcon icon={ faEnvelope } data-v-4d142efa="" className="sp-icon input__icon icon--md icon--inherit icon--envelope" id='icon' />
                            </div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <p style={{verticalAlign: 'inherit'}}>
                            ??????????????? ?????? ??? ???????????? ????????? ????????? ????????? ???????????????. <br />
                            ?????? ???????????? ?????????????????? ????????????.
                            </p>
                        </div>
                    </div>
                </div>


                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>????????????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle infoPwdBox">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div className='inputInfoEPwd' style={{verticalAlign: 'inherit'}}>
                            <input type='password' id='infoPwdInputBox' name='infoPassword' value={ infoPassword } onChange={ onInfoPwd } placeholder='???????????? 8?????? ?????? ???????????????.' ref={pwdRef}/>
                            </div>
                        </div>
                    </div>

                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            
                            {infoPasswordError && <p className="invalid-input pwdInput" style={{fontSize:'0,9em', color:'red'}}>??????????????? ????????????(!@#$%^*+=-) 1?????? ???????????? ???????????? ????????? ???????????? 8??? ?????? 15??? ????????? ???????????????.</p>}
                            
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description infoRePwd">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>???????????? ??????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle infoRePwdBox">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div className='inputInfoRePwd' style={{verticalAlign: 'inherit'}}>
                            <input type='password' disabled={infoPasswordError ? true : false} id='infoRePwdInputBox' name='infoRePassword' value={ infoRePassword } onChange={ onInfoRePwd } placeholder='??????????????? ???????????????.' ref={rePwdRef}/>
                            </div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <p style={{verticalAlign: 'inherit'}}>
                            ??????????????? ????????????(!@#$%^*+=-)??? ???????????? 8?????? ?????? 15?????? ????????? ???????????????.
                            </p>
                            {infoRepasswordCheckError && <p className="invalid-input" style={{fontSize:'0,9em', color:'red'}}>??????????????? ?????? ????????????. ?????? ???????????????.</p>}
                            
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>??????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}} className='infoAgeSelect'>
                                <select id='infoAgeBox'
                                    name='age'
                                   
                                    onChange={(e) =>
                                        setAge({ ...age, default:e.target.value })
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
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <p style={{verticalAlign: 'inherit'}}>
                            ??? ????????? ????????? ??? ???????????????.
                            </p>
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>??????</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit', marginTop:'4%'}}>
                                <label>
                                    <FormCheckLeft
                                        type="radio"
                                        name="infoGender"
                                        value="male"
                                        checked={infoGender === 'male'}
                                        onChange={handleSelect3}
                                    />
                                    <FormCheckText htmlFor="male" style={{textAlign:'center', lineHeight:2}}>???</FormCheckText>
                                </label>

                                <label>
                                    <FormCheckLeft
                                        type="radio"
                                        name="infoGender"
                                        value="female"
                                        onChange={handleSelect3}
                                        checked={infoGender === 'female'}
                                    />
                                    <FormCheckText2 htmlFor="female" style={{textAlign:'center', lineHeight:2}}>???</FormCheckText2>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text" style={{marginTop:'2%'}}>
                        <div style={{verticalAlign: 'inherit'}}>
                            <p style={{verticalAlign: 'inherit'}}>
                            ??? ????????? ????????? ??? ???????????????.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <button id='userInfoBtn' type='submit' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ userInfoModify }>
                        <span className='userButtonText'>??????????????????</span>
                    </button>
                </div>


            </div>
            
        </div>
    );
};

export default React.memo(UserInformation);