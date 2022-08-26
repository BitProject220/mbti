import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ReplyBoard.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const ReplyBoard = () => {

    let [userName] = useState('hacker');
    let [comment, setComment] = useState('');
    let [feedComments, setFeedComments] = useState([]);
    let [isValid, setIsValid] = useState(false);

    let post = e => {
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
        console.log(comment);
        {/* if(comment==''){
            alert('내용을 입력해주세요');
        }else {
            alert(comment);
            axios({
                method: 'post',
                url: 'http://localhost:8080/reply/write',
                data:({
                    'name':name,
                    'comment': comment,
                })
            }).then(()=>{

            }).catch(error => {
                console.log(error)
            })
            console.log(reply);
        };*/}
    };

  //  const menus = ["Menu1", "Menu2", "Menu3", "Menu4"]
 //   const CommentList = menus.map((menu) => (<li>{menu}</li>));

    return (
        <div className='ReplyBox'>
            <div className='CommentBox'>
                <div class="comment_option">
                    <h3 class="comment_title">댓글</h3>
                   {/*  <div class="comment_tab">
                        <button type="button" class="comment_refresh_button">
                            <span class="blind">새로고침</span>
                        </button>
                    </div> */}
                </div>
                <ul className='comment_list'>
                <li>
                    <div className='comment_area'>
                        <div className='comment_box'>
                            <div className='comment_nick_box'>유저닉네임</div>
                            <div className='comment_text_box'><p className='comment_text_view'>내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵</p></div>
                            <div className='comment_info_box'>
                                <div className='logtime'>2022/22/22</div>
                                <div className='comment_btn'>
                                <Link to='#' className='replybtn'>수정</Link>
                                <Link to='#' className='replybtn'>삭제</Link>
                                </div>
                            </div>
                                                   
                        </div>
                    </div>
                </li>
                <li>
                    <div className='comment_area'>
                        <div className='comment_box'>
                            <div className='comment_nick_box'>유저닉네임</div>
                            <div className='comment_text_box'><p className='comment_text_view'>내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵내용댓글내용주르르륵</p></div>
                            <div className='comment_info_box'>
                                <div className='logtime'>2022/22/22</div>
                                <div className='comment_btn'>
                                <Link to='#' className='replybtn'>수정</Link>
                                <Link to='#' className='replybtn'>삭제</Link>
                                </div>
                            </div>
                                                   
                        </div>
                    </div>
                </li>
                </ul>
                <div className='CommentWriter'>
                    <div className='userId'> 댓글달 유저 아이디</div>
                    <div className='usercommend'>
                    <input type="text" className='inputComment' placeholder='댓글달기' onChange={e=> {setComment(e.target.value);}}
                        onkeyup={e=>{
                            e.target.value.length > 0
                            ? setIsValid(true)
                            : setIsValid(false);
                        }}
                        value={comment}/>
                    </div>
                    
                    <button type='button' className='Btn_Update'
                    onClick={post}
                    disabled={isValid ? true : false}>등록하기</button>
                </div>
            </div>
        </div>
    );
};

export default ReplyBoard;