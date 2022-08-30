import React, { useEffect, useReducer, useRef, useState } from 'react';
import '../css/MbtiBoardWrite.css';
import '../../css/reset.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CKeditor from './CKeditor';

const MbtiBoardWrite = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const navigate = useNavigate();
    const qs = require('qs');

    // 제목 유효성
    const [mbtiboardsubject, setMbtiBoardSubject] = useState('');

    // mbti 선택 유효성
    const selectList = ["선택", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"]
    const [mbtiboardcategory, setMbtiBoardCategory] = useState('');
    const mbtiboardselect = (e) => {
        setMbtiBoardCategory(e.target.value);
    }

    // const [mbtinone, setMbtiNone] = useState('');
    // const [INTJ , setINTJ] = useState('');
    // const [INTP , setINTP] = useState('');
    // const [ENTJ , setENTJ] = useState('');
    // const [ENTP , setENTP] = useState('');
    // const [INFJ , setINFJ] = useState('');
    // const [INFP , setINFP] = useState('');
    // const [ENFJ , setENFJ] = useState('');
    // const [ENFP , setENFP] = useState('');
    // const [ISTJ , setISTJ] = useState('');
    // const [ISFJ , setISFJ] = useState('');
    // const [ESTJ , setESTJ] = useState('');
    // const [ESFJ , setESFJ] = useState('');
    // const [ISTP , setISTP] = useState('');
    // const [ISFP , setISFP] = useState('');
    // const [ESTP , setESTP] = useState('');
    // const [ESFP , setESFP] = useState('');
   

    // 내용 유효성 
    const [data, setData] = useState('');
    
    
    // 목록 이동
    const MbtiBoardList = () => {
       navigate("/MbtiBoard");
   }

    // 글 저장
    const subjectCk = mbtiboardsubject.length >= 1 ;
    const contentCk = JSON.stringify(data).length >= 3;
    const categoryCk = mbtiboardcategory !== '선택';
    const submitOk = subjectCk && contentCk && categoryCk === true;
    const subjectRef = useRef(null);
   
    const MbtiBoardSave = (e) => {
   
        e.preventDefault();
   
        if(!categoryCk) {
               alert('카테고리를 선택하세요');
        }  else if (!subjectCk ) {
                 alert('제목을 입력하세요');
                 subjectRef.current.focus();
        } else if (!contentCk ) {
            alert('내용을 입력하세요');

        }
        else {
              
               axios({
                   method :'POST',
                   url: 'http://localhost:8080/board/mbtiboardwrite',
                   data: qs.stringify({
                       'mb_email' : sessionStorage.getItem('email'),
                       'mb_name' : sessionStorage.getItem('name'),
                       'mb_category' : document.getElementById('MbtiCategorySelect').value,
                       'mb_subject' : mbtiboardcategory,
                       'mb_content' : JSON.stringify(data)
                   })
               }).then(()=>{
                   alert('등록 완료');
                   window.location.href='/MbtiBoard';
               }).catch(err=> {
                   alert('실패');
               })
           }
       }
   
       useEffect(() => {
           setEditorLoaded(true);
         }, []);
            
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
                                    <select value={mbtiboardcategory} onChange={mbtiboardselect}>
                                            {selectList.map((item) => (<option value={item} key={item}>{item}</option>))}

                                        {/* <option value={mbtinone}>선택</option>
                                        <option value={INTJ}>INTJ</option>
                                        <option value={INTP}>INTP</option>
                                        <option value={ENTJ}>ENTJ</option>
                                        <option value={ENTP}>ENTP</option>
                                        <option value={INFJ}>INFJ</option>
                                        <option value={INFP}>INFP</option>
                                        <option value={ENFJ}>ENFJ</option>
                                        <option value={ENFP}>ENFP</option>
                                        <option value={ISTJ}>ISTJ</option>
                                        <option value={ISFJ}>ISFJ</option>
                                        <option value={ESTJ}>ESTJ</option>
                                        <option value={ESFJ}>ESFJ</option>
                                        <option value={ISTP}>ISTP</option>
                                        <option value={ISFP}>ISFP</option>
                                        <option value={ESTP}>ESTP</option>
                                        <option value={ESFP}>ESFP</option>                              */}
                                    </select>
                                    
                                    </div>
                            
                                    
                            </div>
                            <div className='MbtiWriteBoardAll'>
                                <label className='MbtiwriteSubject'>
                                    <span className='Mbtifield-subject'>제목</span>
                                    <span className='Mbtistar'>*</span>
                                </label>

                                <div className='Mbtiattr-subject'>
                                    <input type='text' className='Mbtisubject-text' id='mbtiboardsubject'
                                    value={mbtiboardsubject} 
                                    onChange={(e) => {setMbtiBoardSubject(e.target.value)}} 
                                    placeholder='제목을 입력하세요'
                                    ref={subjectRef} ></input>  
                                </div>
             
                            </div>
                        </div>
                        

                        <div className='MbtiBoardEditor'>
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
                <button className="MbtiboardWriteListBtn" onClick={MbtiBoardList} >목록</button>
                <button className="MbtiboardWriteSaveBtn" onClick={MbtiBoardSave}>저장</button>
            </div>

            
            
        </div>
    );
};

export default MbtiBoardWrite;