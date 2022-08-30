import React, { useEffect, useRef, useState } from 'react';
import '../css/FreeBoardWrite.css';
import '../../css/reset.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CKeditor from './CKeditor';

const FreeBoardWrite = () => {
    
    const [editorLoaded, setEditorLoaded] = useState(false);
    const navigate = useNavigate();
    const qs = require('qs');

    // 제목 유효성
    const [freeboardsubject, setFreeBoardSubject] = useState('');

    // 내용 유효성
    const [data, setData] = useState('');

    // 목록 이동
    const FreeBoardList = () => {
        navigate("/FreeBoard");
    }

    // 글 저장
    const subjectCk = freeboardsubject.length >= 1 ;
    const contentCk = JSON.stringify(data).length >= 3;
    const submitOk = subjectCk && contentCk === true;
    const subjectRef = useRef(null);

    const FreeBoardSave = (e) => {

        e.preventDefault();

        if(!subjectCk) {
            alert('제목을 입력하세요');
            subjectRef.current.focus();
          }  else if (!contentCk) {
              alert('내용을 입력하세요');
          }
        else {
           
            axios({
                method :'POST',
                url: 'http://localhost:8080/board/freeboardwrite',
                data: qs.stringify({
                    'fb_email' : sessionStorage.getItem('email'),
                    'fb_name' : sessionStorage.getItem('name'),
                    'fb_subject' : document.getElementById('freeboardsubject').value,
                    'fb_content' : JSON.stringify(data)
                })
            }).then(()=>{
                alert('등록 완료');
                window.location.href='/FreeBoard';
            }).catch(err=> {
                alert('실패');
            })
        }
    }

    useEffect(() => {
        setEditorLoaded(true);
      }, []);



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
                                    value={freeboardsubject} 
                                    onChange={(e) => {setFreeBoardSubject(e.target.value)}} 
                                    placeholder='제목을 입력하세요' ref={subjectRef}></input>  
                            </div>
                            
                        </div> 

                        <div className='BoardEditor' >
                            <CKeditor
                                name="description"
                                onChange={(data) => {
                                setData(data);
                                }}
                                editorLoaded={editorLoaded}
                            />
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