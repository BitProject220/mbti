import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/myPage/myPage.css';


const UserEditModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
      <Button className='UserEditBtn' onClick={handleShow}>
        정보 수정
      </Button>

      <Modal show={show} onHide={handleClose} className='ModalBox'>
        <Modal.Header closeButton>
          <Modal.Title>회원 정보 수정</Modal.Title>
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
          <Button className='SubmitBtn' onClick={handleClose}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserEditModal;

