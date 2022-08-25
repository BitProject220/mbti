import React, { useState } from 'react';
import '../css/FreeBoardWrite.css';
import '../../css/reset.css';
import {CKEditor} from 'ckeditor4-react';




const FreeBoardWrite = () => {

    // 제목 유효성
    const [freeboardsubject, setFreeBoardSubject] = useState('');
    const [freeboardsubjectErr, setFreeBoardSubjectErr] = useState(false);
    const onChangeFreeBoardSubject = (e) => {
        if(e.target.value.length >= 1) setFreeBoardSubjectErr(false);
        else setFreeBoardSubjectErr(true);
        setFreeBoardSubject(e.target.value);
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
                                <input type='text' className='subject-text' id='freeboardsubject' name='freeboardsubject' 
                                   value={freeboardsubject} onChange={onChangeFreeBoardSubject} placeholder='제목을 입력하세요'></input>  
                            </div>
                            {freeboardsubjectErr && <p class="freeboard_subject">제목을 입력하세요.</p>}
                            
                        </div> 

                        <div className='BoardEditor'>
                        <CKEditor data="This is an example CKEditor 4 WYSIWYG editor instance." type="classic"
                        />
                        </div> 
                        

                        
                    </div>
                </div>
                <button className="boardWriteListBtn">목록</button>
                <button type='submit' className="boardWriteSaveBtn">저장</button>
            </div>

            
            
        </div>
    );
};

export default FreeBoardWrite;