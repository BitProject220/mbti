import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/FreeBoardView.css';
import TOPgrey from '../../img/Top/TOPgrey.png';
import ReplyBoard from '../../replyboard/ReplyBoard';
import axios from 'axios';


const FreeBoardView = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [freevote, setFreevote] = useState('');
    const [hit, setHit] = useState('');
    const [logtime, setLogtime] = useState('');
    const [likeCheck,setLikeCheck ] = useState('0');

    const location = useLocation();
    const seq = location.state.seq;
    console.log("freeBoardView의 seq는 " + seq)


    const qs = require('qs');

     useEffect(() => {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboardviewLikeCheck',
            data : qs.stringify({
               'seq' : seq,
               'email' : sessionStorage.getItem("email"),
            })
            
        }).then((res)=>{
            console.log(res.data);
            if(res.data === 'nonExit'){
                setLikeCheck(0)
                console.log(likeCheck)
            }else{
                setLikeCheck(1)
                console.log(likeCheck)
            }

            

        }).catch(error => {
            console.log(error)
        })

    },[]); 


    const back = document.getElementById('FreeBoardViewGoodBtn');

    if(likeCheck === 0){
        back.style.background = '#fff';
        back.style.color = '#f84210';
    }
    else if(likeCheck === 1){
        back.style.background = '#f84210'
        back.style.color = '#fff'
    }

   /*  if(likeCheck === 0){
        back.style.background = 'none';
        back.style.color = '#f84210';
    }
    if(likeCheck === 1){

        back.style.background = '#f84210';
        back.style.color = '#fff';
    } */



   

    useEffect(()=> {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboardview',
            data : qs.stringify({
               'seq' : seq
            })
            
        }).then((res)=>{
            console.log(res.data.content);

             setEmail(res.data.email);
             setName(res.data.name);
             setSubject(res.data.subject);
             setContent(res.data.content);
             setFreevote(res.data.freevote);
             setHit(res.data.hit);
             setLogtime(res.data.logtime);
            

        }).catch(error => {
            console.log("와실패다")
            console.log(error)
        })
    }, []);

    // useEffect(()=> {
    //     axios({
    //         method : 'POST',
    //         url : 'http://localhost:8080/board/goodcount',
    //         data : ({
    //             'seq' : ''
    //         })
    //     }).then((res)=>{
            
    //     }).catch(error => {
    //         alert('실패');
    //     })

    // })
    
    // 추천
    
    const onFreeGood = () => {
        
        if(likeCheck === 0){
            back.style.background = '#fff';
            back.style.color = '#f84210';
            axios({
                method : 'POST',
                url : "http://localhost:8080/board/freeboardviewLikeplus",
                data : qs.stringify({
                 'seq' : seq,
                'email' : sessionStorage.getItem("email"),
                })
             }).then(()=>{
                   
                    alert("추천을 눌렀습니다.")
                    window.location.reload();
                  
                    back.style.background = '#f84210'
                    back.style.color = '#fff'



                }).catch(error => {
    
                   
                    console.log(error)
                })
            
           
        }
        else if(likeCheck === 1){
            back.style.background = '#f84210';
            back.style.color = '#fff';
            
            axios({
                method : "POST",
                url : "http://localhost:8080/board/freeboardviewLikeMinus",
                data : qs.stringify({
                    'seq' : seq,
                   'email' : sessionStorage.getItem("email"),
                })}).then(()=>{
                
                    alert("추천을 취소했습니다.")
                    window.location.reload();
                    back.style.background = '#fff'
                     back.style.color = '#f84210'
                    
                }).catch(error => {
                  
                    console.log(error)
                })
            
        }
        
    }
    

    //삭제
    const ondelete = (seq) => {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboarddelete',
            data : qs.stringify({
                'seq' : seq
            })
        }).then (()=>{
            console.log('삭제 완료');
            window.location.replace("/FreeBoard");
        }).catch (error => {
            alert('실패');
        })

    }



    return (
        <div className='FreeBoardView_wrap'
        style={{backgroundImage:`url(${ TOPgrey })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'200% 300px',}}>
           <h1>FREE Board</h1> 
            <div className='FreeBoardView_form'>
                <input type='hidden' name='seq' id='seq' />
                <input type='hidden' name='email' id='email' value={email}/>
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
                                <div className='Content_View'><span dangerouslySetInnerHTML={{__html: content}}/></div>
                                
                            </div>
                            <div className='FreeBoardView_good'>
                                <div className='Good_btn'>
                                    <button type='button' className='FreeBoardViewGoodBtn' id='FreeBoardViewGoodBtn' style={{padding:'10px'}} onClick={onFreeGood}>추천</button>
                                </div>
                            </div>
                        </div>
                        <div className='FreeBoardView_Button'>
                            <div className='Button_left'>
                                <Link to='/FreeBoard' className='Btn_left_list'>목록</Link>
                            </div>
                            <div className= {sessionStorage.getItem('email') == email ? 'Button_right' : 'hidden' }  >
                                <button className='Btn_right_list_update' >수정</button>
                                <button className='Btn_right_list_delete' onClick={() => {ondelete(email)}} >삭제</button>
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