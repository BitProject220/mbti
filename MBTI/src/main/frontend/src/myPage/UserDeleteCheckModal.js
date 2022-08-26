import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/myPage/myPage.css';

const UserDeleteCheckModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    

    return (
        <>
      <Button className='DeleteSubmitBtn' onClick={handleShow} >
        확인
      </Button>

      <Modal show={show} onHide={handleClose} className='ModalBox'>
        <Modal.Header closeButton>
          <Modal.Title>회원 탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>정말 탈퇴하시겠습니까?</Form.Label>
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

export default UserDeleteCheckModal;