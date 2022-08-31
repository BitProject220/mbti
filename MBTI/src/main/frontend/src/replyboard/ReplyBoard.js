import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ReplyBoard.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { data, map, now } from 'jquery';




const qs = require('qs');
const ReplyBoard = ({ freecomment, seq }) => {

    let [comment, setComment] = useState('');
    let [data, setData] = useState([0]); 

    useEffect( () => {
    axios({
        method: 'Post',
        url : 'http://localhost:8080/reply/userComment',
        data:({
            'fc_FreeBoardseq' : '1',
        })
    }).then((response)=>{
        return setData(response.data);
        
        }).catch(error => {
            console.error(error.response.data);
        });

    }, []);

    let post = e => {

        if(comment==''){
            alert('내용을 입력해주세요');
            return false;
        }else {
            axios({
                method: 'POST',
                url: 'http://localhost:8080/reply/commentWrite',
                data:({
                    
                    'fc_email' : sessionStorage.getItem("email"),
                    'fc_name' : '조범주',
                    'fc_commentContent': comment,
                    'fc_FreeBoardseq' : '1',
                })
            }).then(()=>{
                console.log('저장성공');
                window.location.replace("/ReplyBoard")

            }).catch(error => {
                console.error(error.response.data);
            })
        };
    };
    
    const ondelete = (fc_seq) => {
            axios({
                method: 'POST',
                url: 'http://localhost:8080/reply/commentDelete',
                data: qs.stringify({'fc_seq' : fc_seq})
            }).then(()=>{
                console.log('삭제완료');
                window.location.replace("/ReplyBoard");

            }).catch(error => {
                console.error(error.response.data);
                alert('에러입니다');
            })
    }

    return (
        <div className='ReplyBox'>
            <div className='CommentBox'>
                <div className="comment_option">
                    <h3 className="comment_title">댓글</h3>
                    <div>{seq}</div>
                </div>  
                
                <ul className='comment_list'>
                    
                    {
                        data.map((item, index) => <li key={index}>
                                <div className='comment_area'>
                                <h3> {item.fc_name}</h3>
                                <p className='inputComment'>{item.fc_commentContent}</p>
                                <div className='comment_add'>
                                    <p className='logtime'>{item.fc_logtime}</p>
                                            <div id="showhide" className={ sessionStorage.getItem("email") == item.fc_email ? 'comment_btn' : 'hidden'}>
                                                <button className='replybtn' >수정</button>
                                                <button onClick={() =>{ondelete(item.fc_seq)}} className='replybtn'>삭제</button>
                                            </div>      
                                    </div>
                                </div>
                        
                        </li>)
                    }
                   
                </ul>
                <div className='CommentWriter'>
                    <div className='userId'>{sessionStorage.getItem("email")}</div>
                    <div className='usercommend'>
                    <input type="text" className='inputComment' placeholder='댓글달기' onChange={e=> {setComment(e.target.value);}}
                        
                        value={comment}/>
                    </div>
                    
                    <button type='button' className='Btn_Update'
                    onClick={post}
                    >등록하기</button>
                </div>
            </div>
        </div>
    );
};

export default ReplyBoard;