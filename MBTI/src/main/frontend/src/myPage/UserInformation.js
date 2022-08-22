import React from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/userInfo.css';

const UserInformation = () => {
    return (
        <div style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 300px'}}>
            <div className='userInfo'>
                <div className='userInfoTop'>
                    <h1>회원정보수정</h1>
                </div>

                <div data-v-cbdfd9aa="" className="row__description" style={{marginTop: '60px'}}>
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>귀하의 이메일 주소</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>dbwlsdhksenz@naver.com</div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>
                            프로필에 할당된 이메일 주소를 변경하면 무작위로 생성된 비밀번호가 새 주소로 전송됩니다. 
                            </div>
                            <div style={{verticalAlign: 'inherit'}}>이후 로그인시 이용해주시기 바랍니다.</div>
                        </div>
                    </div>
                </div>


                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>이름</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>박유진</div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>
                                커뮤니티 또는 매칭 할 때 사용 되는 이름 또는 별명입니다.<br /> 프로필에도 이름이 표시됩니다. 
                            </div>
                        </div>
                    </div>
                </div>


                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>비밀번호</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>변경해야함</div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>
                                비밀번호 변경가능합니다
                            </div>
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>나이</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>25</div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>
                                매칭할때 사용됩니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div data-v-cbdfd9aa="" className="row__description">
                    <div data-v-cbdfd9aa="" className="row__title">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>성별</div>
                        </div>
                    </div> 
                    <div data-v-cbdfd9aa="" className="row__subtitle">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>여</div>
                        </div>
                    </div>
                    <div data-v-cbdfd9aa="" className="row__text">
                        <div style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>
                                매칭할때 사용됩니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button id='userInfoBtn' type='submit' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt">
                        <span className='userButtonText'>회원정보수정</span>
                    </button>
                </div>


            </div>
            
        </div>
    );
};

export default UserInformation;