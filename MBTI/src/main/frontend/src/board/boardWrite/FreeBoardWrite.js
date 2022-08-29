import React, { useRef, useState } from 'react';
import '../css/FreeBoardWrite.css';
import '../../css/reset.css';
import {CKEditor} from 'ckeditor4-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const FreeBoardWrite = () => {

    const navigate = useNavigate();
    const qs = require('qs');
    let freeboardname;

    // 제목 유효성
    const [freeboardsubject, setFreeBoardSubject] = useState('');
    const [freeboardsubjectErr, setFreeBoardSubjectErr] = useState(false);
    const onChangeFreeBoardSubject = (e) => {
        if(e.target.value.length >= 1) setFreeBoardSubjectErr(false);
        else setFreeBoardSubjectErr(true);
        setFreeBoardSubject(e.target.value);
    }

    // 내용 유효성
    const freeboardcontent = document.getElementById('freeboardcontent');
    const [freeboardcontentErr, setFreeBoardContentErr] = useState(false);
    const onChangeFreeBoardContent = () => {
          if( freeboardcontent >= 1 ) setFreeBoardContentErr(false);
          else setFreeBoardContentErr(true);
     
        
      }

    // 목록 이동
    const FreeBoardList = () => {
        navigate("/FreeBoard");
    }

    // 글 저장
    const subjectCk = freeboardsubject.length >=1 ;
    // const contentCk = freeboardcontent.length >=1 ;
    const submitOk = subjectCk === true;
    const subjectRef = useRef(null);

    const FreeBoardSave = (e) => {


        e.preventDefault();


        if(!subjectCk) {
            alert('제목을 입력하세요');
            subjectRef.current.focus();
         } //else if (!contentCk) {
        //     alert('내용을 입력하세요');

        // }
        else {

            axios({
                method :'POST',
                url: 'http://localhost:8080/board/freeboardwrite',
                data: qs.stringify({
                    'fb_email' : sessionStorage.getItem('email'),
                    'fb_name' : sessionStorage.getItem('name'),
                    'fb_subject' : document.getElementById('freeboardsubject').value,
                    'fb_content' : ''})
            }).then(()=>{
                alert('등록 완료');
            }).catch(err=> {
                alert('실패');
            })
        }
    }
  

    return (

        <div className='BoardWrite'>
            <div className='BoardWriteContent'>
                <div className='BoardWriteArea'>
                    <div className='BoardWriteEditor'>
                        <div className='BoardWriteSubject'>
                            <label className='writeSubject'>
                                <span className='field-subject' >제목</span>
                                <span className='star'>*</span>
                            </label>
                            <div className='attr-subject'>
                                <input type='text' className='subject-text' id='freeboardsubject'
                                   value={freeboardsubject} onChange={onChangeFreeBoardSubject} placeholder='제목을 입력하세요' ref={subjectRef}></input>  
                            </div>
                            {freeboardsubjectErr && <p className="freeboard_subject">제목을 입력하세요.</p>}
                            
                        </div> 

                        <div className='BoardEditor' >
                         <CKEditor type="classic" onChange={onChangeFreeBoardContent} id='freeboardcontent'

                         />

                         
                            

                        { freeboardcontentErr && <p className="freeboard_contnet">내용을 입력하세요.</p> } 
                        </div> 
                                   
                    </div>
                </div>
                <button className="boardWriteListBtn" onClick={FreeBoardList}>목록</button>
                <button className="boardWriteSaveBtn" onClick={FreeBoardSave}>저장</button>
            </div>

            
            
        </div>
    );
                
};

export default FreeBoardWrite;