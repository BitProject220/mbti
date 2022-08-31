import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import '../css/myPage/myPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const ModalUserInfo = () => {
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
           
            const dataPwd = res.data.password
           
            if(pwd !== dataPwd){
                setPwdError2(true)
            }
            else if(pwd === dataPwd){
                alert("성공")
                navigate("/userInfo")
            }
        }).catch(error =>{
            console.log(error)
        });
    }
    
}

    return (
        <>
        <Button variant="primary" onClick={handleShow} className='UserEditBtn'>
                정보수정
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
                    <Button variant="primary" onClick={pwdCheck} style={{background:'#F19904', border:'none'}}>
                        확인
                    </Button>
                    </Modal.Footer>
                </Modal>
            
        </>
    );
};

export default ModalUserInfo;