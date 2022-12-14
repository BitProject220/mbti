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



    const qs = require('qs');
    const location = useLocation();
    const seq = location.state.seq;


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
            console.log("????????????")
            console.log(error)
        })
    }, []);
    

    //??????

    // const freeboardupdate = () => {

    //     axios({
    //         method : 'POST',
    //         url : 'http://localhost:8080/board/freeboardupdate',
    //         data : qs.stringify({
    //             'seq' : seq
    //         })
    //     }).then(() =>{
    //         window.location.href='/FreeBoardUpdateMain';
    //     }).catch(err => {
    //         alert('??????');
    //     })

    // })
    
    // ??????
    
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
                   
                    alert("????????? ???????????????.")
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
                
                    alert("????????? ??????????????????.")
                    window.location.reload();
                    back.style.background = '#fff'
                     back.style.color = '#f84210'
                    
                }).catch(error => {
                  
                    console.log(error)
                })
            
        }
        
    }

    //??????
    const ondelete = () => {
        axios({
            method : 'POST',
            url : 'http://localhost:8080/board/freeboarddelete',
            data : qs.stringify({
                'seq' : seq
            })
        }).then (()=>{
            alert('?????? ??????');
            window.location.replace("/FreeBoard");
        }).catch (error => {
            alert('??????');
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
                                    <div className='Info_title_subject'>??????</div>
                                    <div className='Info_title_subjectUser' value={subject}>{subject}</div>
                                </div>
                                <div className='Info_writer'>
                                    <div className='Info_writer_name'>?????????</div>
                                    <div className='Info_Writer_nameUser' value={name}>{name}</div>
                                </div>
                                <div className='Info_date'>
                                    <div className='Info_date_name'>?????????</div>
                                    <div className='Info_date_nameUser' value={logtime}>{logtime}</div>
                                </div>
                                <div className='Info_good'>
                                    <div className='Info_good_name'>??????</div>
                                    <div className='Info_good_nameUser' value={freevote}>{freevote}</div>
                                </div>
                                <div className='Info_view'>
                                    <div className='Info_view_name'>??????</div>
                                    <div className='Info_view_nameUser' value={hit}>{hit}</div>
                                </div>
                            </div>
                            <div className='FreeBoardView_content'>
                                <div className='Content_View'><span dangerouslySetInnerHTML={{__html: content}}/></div>
                                
                            </div>
                            <div className='FreeBoardView_good'>
                                <div className='Good_btn'>
                                    <button type='button' className='FreeBoardViewGoodBtn' id='FreeBoardViewGoodBtn' style={{padding:'10px'}} onClick={onFreeGood}>??????</button>

                                </div>
                            </div>
                        </div>
                        <div className='FreeBoardView_Button'>
                            <div className='Button_left'>
                                <Link to='/FreeBoard' className='Btn_left_list'>??????</Link>
                            </div>
                            <div className= {sessionStorage.getItem('email') == email ? 'Button_right' : 'hidden' }  >
                                <button className='Btn_right_list_update'>
                                    ??????</button>
                                <button className='Btn_right_list_delete' onClick={() => {ondelete(email)}} >??????</button>
                            </div>
                        </div>
                        <ReplyBoard seq={seq}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FreeBoardView;