import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/myPage/myPage.css';



const UserDeleteModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const onRemove = () => {
    //   if(window.confirm("정말 탈퇴하시겠습니까?")) {
    //     setShow(false);
    //     alert("삭제되었습니다");
        
    //   }else {
    //     setShow(false);
    //     alert("취소합니다");
    //   }
    // }



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
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button className='DeleteSubmitBtn' onClick={handleClose} >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    

    </>

    
  );
};

export default UserDeleteModal;