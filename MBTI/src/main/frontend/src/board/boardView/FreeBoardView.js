import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/FreeBoardView.css';
import TOPgrey from '../../img/Top/TOPgrey.png';
import ReplyBoard from '../../replyboard/ReplyBoard';
import axios from 'axios';


const FreeBoardView = (props) => {
    const [seq, setSeq] = useState('');
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [logtime, setLogtime] = useState('');
    const [freevote, setFreevote] = useState('');
    const [hit, setHit] = useState('');
    const [content, setContent] = useState('');

    const qs = require('qs');

    useEffect(()=> {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboardview',
            data : ({
               'seq' : seq
            })
            
        }).then((res)=>{
            console.log(res.data);
            setSeq(res.data.seq);
            setSubject(res.data.subject);
            setName(res.data.name);
            setLogtime(res.data.logtime);
            setFreevote(res.data.freevote);
            setHit(res.data.hit);
            setContent(res.data.content);
            

        }).catch(error => {
            console.log("hihihihihi실패실패실패")
            console.log(error)
        })
    });

    useEffect(()=> {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/goodcount',
            data : ({
                'seq' : seq
            })
        }).then((res)=>{
            
        }).catch(error => {
            alert('실패');
        })

    })
    
    // 추천
    const FreeGood = () => {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/good/goodupdate',
            data : ({
                'seq' : seq,
                'email' : sessionStorage.getItem('email'),
            })
        }).then((res)=>{
            if(res.data.freevote === 0) {
                alert('추천 완료');
                document.location.reload();
            }else if (res.data.freevote === 1) {
                alert('추천 취소');
                document.location.reload();
            }
            
        }).catch(error => {
            alert('실패');
        })
    }



    return (
        <div className='FreeBoardView_wrap'
        style={{backgroundImage:`url(${ TOPgrey })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'200% 300px',}}>
           <h1>FREE Board</h1> 
            <div className='FreeBoardView_form'>
                <div className='FreeBoardView_document'>
                    <div className='FreeBoardView_document2'>
                        <div className='FreeBoardView_document_wrap'>
                            <div className='FreeBoardView_info'>
                                <div className='Info_title'>
                                    <div className='Info_title_subject'>제목</div>
                                    <div className='Info_title_subjectUser' value={subject}>{subject}</div>
                                </div>
                                <div className='Info_writer'>
                                    <div className='Info_writer_name'>작성자</div>
                                    <div className='Info_Writer_nameUser' value={name}>{name}</div>
                                </div>
                                <div className='Info_date'>
                                    <div className='Info_date_name'>작성일</div>
                                    <div className='Info_date_nameUser' value={logtime}>{logtime}</div>
                                </div>
                                <div className='Info_good'>
                                    <div className='Info_good_name'>추천</div>
                                    <div className='Info_good_nameUser' value={freevote}>{freevote}</div>
                                </div>
                                <div className='Info_view'>
                                    <div className='Info_view_name'>조회</div>
                                    <div className='Info_view_nameUser' value={hit}>{hit}</div>
                                </div>
                            </div>
                            <div className='FreeBoardView_content'>
                                <div className='Content_View' >내용 들어갈 곳</div>
                            </div>
                            <div className='FreeBoardView_good'>
                                <div className='Good_btn'>
                                    <button type='button' className='FreeBoardViewGoodBtn' onClick={FreeGood}>추천</button>
                                </div>
                            </div>
                        </div>
                        <div className='FreeBoardView_Button'>
                            <div className='Button_left'>
                                <Link to='/FreeBoard' className='Btn_left_list'>목록</Link>
                            </div>
                            <div className='Button_right'>
                                <Link to='#' className='Btn_right_list_update'>수정</Link>
                                <Link to='#' className='Btn_right_list_delete'>삭제</Link>
                            </div>
                        </div>
                        <ReplyBoard />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FreeBoardView;