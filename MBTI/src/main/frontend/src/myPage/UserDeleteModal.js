import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/myPage/myPage.css';
import Swal from "sweetalert2";



const UserDeleteModal = () => {
    // 모달창
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const checkModal = () => {
      Swal.fire(
        '회원 탈퇴',
        '정말 탈퇴 하시겠습니까?',
        'question'
      )

    };


    return (
          <>
      <Button className='UserDeleteBtn' onClick={handleShow}>
        회원 탈퇴
      </Button>

      <Modal show={show} onHide={handleClose} className='ModalBox'>
        <Modal.Header closeButton>
          <Modal.Title>회원 탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>비밀번호를 입력하세요</Form.Label>
              <Form.Control name="passwordCheck"
                type="password"
                placeholder="비밀번호를 입력하세요"
                autoFocus
              />
            <p className="UserPasswordCheckError" style={{fontSize:'0,9em', color:'red'}}>비밀번호가 맞지 않습니다. 다시 확인하세요. </p> 
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button className='DeleteSubmitBtn' onClick={checkModal}>
            확인
          </Button>
            
        </Modal.Footer>
        
      </Modal>

      

      
    

    </>

    
  );
};

export default UserDeleteModal;