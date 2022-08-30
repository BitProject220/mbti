import React, { useEffect, useState } from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import '../css/myPage/myPage.css';
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate } from 'react-router';
import ModalDelete from './ModalDelete';
import ModalUserInfo from './ModalUserInfo';

const Mypage = () => {
    const navigate = useNavigate();
    const [mbti, setMbti] = useState('');
    const [mbti_email, setMbti_email] = useState('');
    const qs = require('qs');

     useEffect( () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8080/user/userInfoMain',
            data: qs.stringify({'mbti_email' : sessionStorage.getItem("email")})
        }).then((res)=>{
            console.log("안녕")
            console.log(sessionStorage.getItem("email"))
            console.log(res.data.mbti_type+"우에에엥에에에에에에에엥에에엥")
            /* setMbti(res.data.mbti_type)*/
            setMbti_email(sessionStorage.getItem("email")) 
            setMbti(res.data.mbti_type) 

        }).catch(error =>{
            console.log(error)
        });
    }, []); 

    const mbtiResultPage = () => {
        if(mbti === ''){
            alert("먼저 성격 유형 검사를 진행하세요.")
            navigate("/test");
        }
        else {
            navigate("/userMbtiResult");            
        }
    }

   console.log(mbti+"나의 엠비티아이는????????????")
     

    // 회원정보수정 모달
   /*  const userEdit = () => {
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
    navigate("/userInfo", { state: { email: email }});
    
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
       
    } */


    

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
                                <div className='ContentSub_Mbti'>{mbti === '' ? "진행된 검사가 없습니다." : mbti}</div> {/* 내 mbti 결과 가져오기*/}
                                <div className='ContentSub_Sub'>나의 MBTI 상세하게 알고 싶다면? 당장 클릭하세요!</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                <button className='UserEditBtn' onClick={ mbtiResultPage }>MBTI 결과</button>
                            </div>
                        </div>
                    </div>

                    <div className='myPageContent2'>
                        <div className='myPageContentSub2'>
                            <div className='ContentSub_2'>
                                <div className='ContentSub_Title2'>회원 정보 수정</div>
                                <div className='ContentSub_email'>{mbti_email}</div> {/* 회원 이메일 주소 가져오기*/}
                                <div className='ContentSub_Sub2'>이름, 나이, 성격유형, 성별을 수정 하고 싶으시면 당장 클릭하세요!</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                <ModalUserInfo />
                            </div>
                        </div>
                    </div>

                    <div className='myPageContent3'>
                        <div className='myPageContentSub3'>
                            <div className='ContentSub_3'>
                                <div className='ContentSub_Title3'>회원 탈퇴</div>
                                
                                <div className='ContentSub_Sub3'>회원 탈퇴를 하시면 모든 정보가 사라집니다.</div>
                            </div>
                            <div className='ContentSub_Btn'>
                                {/* <button className='UserDeleteBtn' onClick={userDelete}>회원 탈퇴</button> */}
                               <ModalDelete />
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
            
        </div>
    );
};

export default Mypage;