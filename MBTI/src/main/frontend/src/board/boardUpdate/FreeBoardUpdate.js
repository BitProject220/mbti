import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../css/FreeBoardWrite.css';
import '../../css/reset.css';
import CKeditor from '../boardWrite/CKeditor';

const FreeBoardUpdate = () => {


    const [editorLoaded, setEditorLoaded] = useState(false);
    useEffect(() => {
        setEditorLoaded(true);
      }, []);

      const navigate = useNavigate();
      const qs = require('qs');

      const [data, setData] = useState('');

      const [subject, setSubject] = useState('');
      const [content, setContent] = useState('');

    // 목록 이동
    const FreeBoardUpdateList = () => {
        navigate("/FreeBoard");
    }

    useEffect(()=>{
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboardupdateform',
            data : qs.stringify({
                'seq' : ''
            })
        }).then((res)=> {
            setSubject(res.data.subject)
            setContent(res.data.content)

        }).catch(error => {
     
        })
    })


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
                                    value={subject}
                                  ></input>  
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

                <button className="boardWriteListBtn" onClick={FreeBoardUpdateList} >목록</button>
                <button className="boardWriteSaveBtn" >저장</button>

            </div>

            
            
        </div>
    );
};

export default FreeBoardUpdate;