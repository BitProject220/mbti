import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import '../css/myPage/myPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router';



const ModalDelete = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pwdError, setPwdError] = useState(false);
    const [pwd, setPwd] = useState('');
    const [pwdError2, setPwdError2] = useState(false);
    const navigate = useNavigate();

    const onPwd = (e) => {
        const { value } = e.target
        setPwd(value)
    } 

    console.log(pwd+"23221213")

    const pwdCheck = (e) => {
        const qs = require('qs');
        
       if(pwd ===''){
        setPwdError(true);
       }
       else {
        setPwdError(false);
        axios({
                    
            method: 'POST',
            url: 'http://localhost:8080/user/userInfoDeleteCheck',
            data: qs.stringify({ 
                'email': sessionStorage.getItem("email")
            })
        }).then((res)=>{
            console.log(res.data.password)
            const dataPwd = res.data.password
            console.log(dataPwd)
            if(pwd !== dataPwd){
                setPwdError2(true)
            }
            else if(pwd === dataPwd){
                
                axios({
                    method: 'POST',
                    url: 'http://localhost:8080/user/userInfoDelete',
                    data: qs.stringify({ 
                        'email': sessionStorage.getItem("email")
                    })
                }).then(()=>{
                    
                    window.confirm("정말 틸퇴하시겠습니까?")
                    alert("탈퇴가 완료되었습니다.\n이용해주셔서 감사합니다.")
                    sessionStorage.clear();
                    window.location.href="/"
                }).catch(error =>{
                    console.log(error)
                });
            }
        }).catch(error =>{
            console.log(error)
        });
    }
    
}


    return (
        <>

            <Button variant="primary" onClick={handleShow} className='UserDeleteBtn'>
                회원탈퇴
            </Button>

                <Modal show={show} onHide={handleClose} className='ModalBox'>
                    <Modal.Header closeButton>
                    <Modal.Title>비밀번호 확인</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="비밀번호 8~15자리"
                            name="pwd"
                            value={pwd}
                            onChange={ onPwd }
                            autoFocus
                        />
                        </Form.Group>
                        {pwdError && <p className="invalid-input" style={{fontSize:'0,9em', color:'red'}}>비밀번호를 입력하세요.</p>}
                        {pwdError2 && <p className="invalid-input" style={{fontSize:'0,9em', color:'red'}}>비밀번호가 맞지 않습니다. 다시 확인하세요.</p>}
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} style={{border:'none'}}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={pwdCheck} style={{background:'#f64040', border:'none'}}>
                        확인
                    </Button>
                    </Modal.Footer>
                </Modal>
            
        </>
    );
};

export default ModalDelete;