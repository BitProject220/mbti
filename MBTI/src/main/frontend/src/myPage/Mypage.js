import React, { useState } from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/myPage.css';
import UserEditModal from './UserEditModal';
import Swal from "sweetalert2";

const Mypage = () => {
     

    // 회원정보수정 모달
    const userEdit = () => {
        const { value: password } = Swal.fire({
            title: '회원 정보 수정',
            input: 'password',
            inputLabel: '비밀번호를 입력하세요',
            inputPlaceholder: '비밀번호를 입력하세요',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off',   
            },
            confirmButtonColor : '#F19904'
   })
   .then(()=> {

   }).catch(error => {
    Swal.fire(
        '비밀번호가 다릅니다.',
        '비밀 번호를 확인해주세요.',
        'error',
    )
   })
};
    // 회원탈퇴 모달
    const userDelete = () => {
        const { value: password } = Swal.fire({
            title: '회원 탈퇴',
            input: 'password',
            inputLabel: '비밀번호를 입력하세요',
            inputPlaceholder: '비밀번호를 입력하세요',
            inputAttributes: {
              maxlength: 15,
              autocapitalize: 'off',
              autocorrect: 'off',   
            },
            confirmButtonColor : '#f64040',
        
          })
          .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '정말 탈퇴 하시겠습니까?',
                    text: "모든 정보가 사라집니다.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#aaaaaa',
                    cancelButtonColor: '#f64040',
                    confirmButtonText: '확인',
                    cancelButtonText:'취소'
            }).then((result) => {
                if(result.isConfirmed) {
                    Swal.fire({
                       title : '회원 탈퇴 완료!',
                       text : '모든 정보가 사라졌습니다.',
                       icon : 'success',
                       confirmButtonColor : '#f64040'                   
                     })                   
                }
                
            })
                
                }
        });
       
    }


    

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
                                <button className='UserEditBtn'>MBTI 결과</button>
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
                                <button className='UserEditBtn' onClick={userEdit}>정보 수정</button>
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
                                <button className='UserDeleteBtn' onClick={userDelete}>회원 탈퇴</button>
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