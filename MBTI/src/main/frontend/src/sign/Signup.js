import React, { useState } from 'react';
import '../css/signup/signup.css';
import '../css/reset.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import arrow from '../img/downArrow.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import ModalPg from './ModalPg';
import Button from 'react-bootstrap/Button';
import ModalPg2 from './ModalPg2';


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onInputName = (e) => {
        const {value} = e.target
        setName(value)
    }

    const onInputEmail = (e) => {
        const {value} = e.target
        setEmail(value)
    }

    const [age, setAge] = useState({
        default: "나이를 입력해주세요."
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

    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const [Selected2, setSelected2] = useState("");

    const handleSelect2 = (e) => {
        setSelected2(e.target.value);
    };

    const [selected3, setSelected3] = useState('');

    const handleSelect3 = (e) => {
        setSelected3(e.target.value);
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
        


    return (
        <div className='container'>
            <h1 className='underlined'>회원가입</h1>
            <div>
                <form>
                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">이름 : </label>
                        <div className='input__row' data-v-4d142efa="">
                            <input type='text' value={ name } onChange={ onInputName } placeholder='Your Name' />
                        </div>
                        <p className='input__note' data-v-4d142efa="">
                            어떻게 불러야 할지 알기 위함입니다. 당신이 원한다면 별명을 입력하셔도 됩니다.
                        </p>
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">이메일 : </label>
                        <div className='input__row inputEmail' data-v-4d142efa="">
                            <input id='emailInputBox' type='email' value={ email } onChange={ onInputEmail } placeholder='Your E-mail'></input>
                            
                            <FontAwesomeIcon icon={ faEnvelope } data-v-4d142efa="" className="sp-icon input__icon icon--md icon--inherit icon--envelope" id='icon' />
                        </div>
                        <p className='input__note' data-v-4d142efa="">
                            이메일 주소를 올바르게 입력했는지 다시 확인하세요. 입력한 이메일로 임시 비밀번호를 보낼 것입니다.
                        </p>
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">나이 : </label>
                        <div className='ageSelect'>
                           <select id='ageBox'
                                value={age.default}
                                onChange={(e) =>
                                    setAge({ ...age, default: e.target.value })
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
                        <label className='input__label label' data-v-4d142efa="">성격유형 : </label>
                        <div className='select'>
                            <select onChange={handleSelect} value={Selected} id='selectBox'>
                                <option value="0">MBTI검사를 먼저 진행하세요.</option>
                                <option value="1">분석가    (INTJ)</option>
                                <option value="2">논리술사  (INTP)</option>
                                <option value="3">통솔자    (ENTJ)</option>
                                <option value="4">변론가    (ENTP)</option>
                                <option value="5">옹호자    (INFJ)</option>
                                <option value="6">중재자    (INFP)</option>
                                <option value="7">선도자    (ENFJ)</option>
                                <option value="8">활동가    (ENFP)</option>
                                <option value="9">현실주의자(ISTJ)</option>
                                <option value="10">수호자   (ISFJ)</option>
                                <option value="11">경영자   (ESTJ)</option>
                                <option value="12">집정관   (ESFJ)</option>
                                <option value="13">장인     (ISTP)</option>
                                <option value="14">모험관   (ISFP)</option>
                                <option value="15">사업가   (ESTP)</option>
                                <option value="16">연예인   (ESFP)</option>
                            </select>
                            <span id='arrowImg'><img src={ arrow } alt="" /></span>
                        </div>
                    </div>

                    <div className='sp-input inputgroup has--label' data-v-4d142efa="">
                        <label className='input__label label' data-v-4d142efa="">이외의 유형 : </label>
                        <div className='select'>
                            <select onChange={handleSelect2} value={Selected2} id='selectBox'>
                                <option value="0">MBTI검사를 먼저 진행하세요.</option>
                                <option value="1">A (Assertive)</option>
                                <option value="2">T (Turbulent)</option>
                            </select>
                            <span id='arrowImg'><img src={ arrow } alt="" /></span>
                        </div>
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
                                    name="radioButton"
                                    value="male"
                                    checked={selected3 === 'male'}
                                    onChange={handleSelect3}
                                />
                                <FormCheckText htmlFor="male" style={{textAlign:'center', lineHeight:2}}>남</FormCheckText>
                            </label>

                            <label>
                                <FormCheckLeft
                                    type="radio"
                                    name="radioButton"
                                    value="female"
                                    onChange={handleSelect3}
                                    checked={selected3 === 'female'}
                                />
                                <FormCheckText2 htmlFor="female" style={{textAlign:'center', lineHeight:2}}>여</FormCheckText2>
                            </label>
                        </div>
                    </div>

    
                    <div className='sp-input inputgroup has--label' data-v-4d142efa="" style={{marginTop:'2.5%'}}>
                    <label className='input__label label' data-v-4d142efa="">뉴스레터를 구독하시겠습니까? </label>
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
                        <button id='conBtn' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt">
                            <span className='buttonText'>회원가입</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='rightIcon' />
                        </button>
                        
                    </div>

                    <div className='policy'>
                        <p>당사는 귀하의 개인 데이터를 판매하거나 부적절하게 공유하지 않습니다. <br />
                        계속하면 당사의 <ModalPg />과 귀하가 당사의 <ModalPg2 />  을 읽었다는 것에 동의합니다.
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