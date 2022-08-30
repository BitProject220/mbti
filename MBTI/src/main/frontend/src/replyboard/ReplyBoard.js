import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ReplyBoard.css';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { data, now } from 'jquery';




const ReplyBoard = ({ freecomment }) => {

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


            }).catch(error => {
                console.error(error.response.data);
            })
        };
        console.log(comment);
    };


    
  //  const menus = ["Menu1", "Menu2", "Menu3", "Menu4"]
 //   const CommentList = menus.map((menu) => (<li>{menu}</li>));

    return (
        <div className='ReplyBox'>
            <div className='CommentBox'>
                <div className="comment_option">
                    <h3 className="comment_title">댓글</h3>
                </div>
                
                <ul className='comment_list'>
                    <div>
                    {
                        data.map(data => 
                        <li key={data.fc_seq}>
                            
                                <div className='comment_area'>
                                <h3> {data.fc_name}</h3>
                                <p className='comment_text_view'>{data.fc_commentContent}</p>
                                <div className='comment_add'>
                                    <p className='logtime'>{data.fc_logtime}</p>
                                            <div className='comment_btn'>
                                                <button className='replybtn'>수정</button>
                                                <button className='replybtn'>삭제</button>
                                            </div>      
                                    </div>
                                </div>
                        
                        </li>)
                    }
                    </div> 
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