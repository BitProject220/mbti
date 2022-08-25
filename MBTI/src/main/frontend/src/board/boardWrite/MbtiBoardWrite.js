import React, { useState } from 'react';
import '../css/MbtiBoardWrite.css';
import '../../css/reset.css';
import {CKEditor} from 'ckeditor4-react';

const MbtiBoardWrite = () => {

    // 제목 유효성
    const [mbtiboardsubject, setMbtiBoardSubject] = useState('');
    const [mbtiboardsubjectErr, setMbtiBoardSubjectErr] = useState(false);
    const onChangeMbtiBoardSubject = (e) => {
        if(e.target.value.length >= 1) setMbtiBoardSubjectErr(false);
        else setMbtiBoardSubjectErr(true);
        setMbtiBoardSubject(e.target.value);
    }

    // mbti 선택 유효성
    const [mbtinone, setMbtiNone] = useState('');
    const [mbtiboardselectErr, setMbtiBoardSelectErr] = useState(false);
    const onChangeMbtiBoardSelect = (e) => {
        if(e.target.value === mbtinone ) setMbtiBoardSelectErr(true);
        else setMbtiBoardSelectErr(false);
        setMbtiNone(e.target.value);
    }
    
    
    return (
        <div className='MbtiBoardWrite'>
            <div className='MbtiBoardWriteContent'>
                <div className='MbtiBoardWriteArea'>
                    <div className='MbtiBoardWriteEditor'>
                        <div className='MbtiBoardWriteSubject'>
                            
                            <div className='MbtiSelectAll'>
                                <label className='MbtiwriteSubject'>
                                    <span className='Mbtifield-Select'>MBTI</span>
                                    <span className='Mbtistar'>*</span>
                                </label>

                                <div className='MbtiSelect'>
                                    <select onChange={onChangeMbtiBoardSelect} >
                                        <option value={mbtinone} >선택</option>
                                        <option>INTJ</option>
                                        <option>INTP</option>
                                        <option>ENTJ</option>
                                        <option>ENTP</option>
                                        <option>INFJ</option>
                                        <option>INFP</option>
                                        <option>ENFJ</option>
                                        <option>ENFP</option>
                                        <option>ISTJ</option>
                                        <option>ISFJ</option>
                                        <option>ESTJ</option>
                                        <option>ESFJ</option>
                                        <option>ISTP</option>
                                        <option>ISFP</option>
                                        <option>ESTP</option>
                                        <option>ESFP</option>                             
                                    </select>
                                    {mbtiboardselectErr && <p class="mbtiboard_select">MBTI를 선택하세요.</p>}
                                    </div>
                            
                                    
                            </div>
                            <div className='MbtiWriteBoardAll'>
                                <label className='MbtiwriteSubject'>
                                    <span className='Mbtifield-subject'>제목</span>
                                    <span className='Mbtistar'>*</span>
                                </label>

                                <div className='Mbtiattr-subject'>
                                    <input type='text' className='Mbtisubject-text' id='mbtiboardsubject' name='mbtiboardsubject' 
                                    value={mbtiboardsubject} onChange={onChangeMbtiBoardSubject} placeholder='제목을 입력하세요'></input>  
                                </div>
                                {mbtiboardsubjectErr && <p class="mbtiboard_subject">제목을 입력하세요.</p>} 
                            </div>
                        </div>
                        

                        <div className='MbtiBoardEditor'>
                        <CKEditor data="This is an example CKEditor 4 WYSIWYG editor instance." type="classic"
                        />
                            
                        </div> 

                        
                    </div>
                </div>
                <button className="MbtiboardWriteListBtn">목록</button>
                <button type='submit' className="MbtiboardWriteSaveBtn">저장</button>
            </div>

            
            
        </div>
    );
};

export default MbtiBoardWrite;