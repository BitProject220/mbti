import React from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/myPage.css';
import UserEditModal from './UserEditModal';
import UserDeleteModal from './UserDeleteModal';

const Mypage = () => {


    return (
        <div style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 300px',
    }}>
            <div className='myPage'>
                <div className='myPageTop'>
                    <h1>마이페이지</h1>      
                </div>
                <div className='myPageSection'>
                    <div className='myPageContent'>
                        <div className='myPageContentSub'>
                            <div className='ContentSub_'>
                                <div className='ContentSub_Title'>나의 성격 유형</div>
                                <div className='ContentSub_Mbti'>ISFP</div> {/* 내 mbti 결과 가져오기*/}
                                <div className='ContentSub_Sub'>나의 MBTI 상세하게 알고 싶다면? 당장 클릭하세요!</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                <button className='UserEditBtn'><span>MBTI 결과</span></button>
                            </div>
                        </div>
                    </div>

                    <div className='myPageContent2'>
                        <div className='myPageContentSub2'>
                            <div className='ContentSub_2'>
                                <div className='ContentSub_Title2'>회원 정보 수정</div>
                                <div className='ContentSub_email'>aaaaa@gmail.com</div> {/* 회원 이메일 주소 가져오기*/}
                                <div className='ContentSub_Sub2'>이름, 나이, 성격유형, 성별, 뉴스레터를 수정 하고 싶으시면 당장 클릭하세요!</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                <UserEditModal/>
                            </div>
                        </div>
                    </div>

                    <div className='myPageContent3'>
                        <div className='myPageContentSub3'>
                            <div className='ContentSub_3'>
                                <div className='ContentSub_Title3'>회원 탈퇴</div>
                                <div className='ContentSub_email'>aaaaa@gmail.com</div> {/* 회원 이메일 주소 가져오기*/}
                                <div className='ContentSub_Sub3'>회원 탈퇴를 하시면 모든 정보가 사라집니다.</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                <UserDeleteModal />
                            </div>
                        </div>
                    </div>

                    <div className='UserJoinTime'>
                        You joined 1 day ago, on August 16, 2022.
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Mypage;