import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FreeBoardView.css';
import TOPgrey from '../../img/Top/TOPgrey.png';
import ReplyBoard from '../../replyboard/ReplyBoard';

const FreeBoardView = () => {
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
                                    <div className='Info_title_subjectUser'>제목 받아올 곳</div>
                                </div>
                                <div className='Info_writer'>
                                    <div className='Info_writer_name'>작성자</div>
                                    <div className='Info_Writer_nameUser'>작성자</div>
                                </div>
                                <div className='Info_date'>
                                    <div className='Info_date_name'>작성일</div>
                                    <div className='Info_date_nameUser'>0000-00-00</div>
                                </div>
                                <div className='Info_good'>
                                    <div className='Info_good_name'>추천</div>
                                    <div className='Info_good_nameUser'>33</div>
                                </div>
                                <div className='Info_view'>
                                    <div className='Info_view_name'>조회</div>
                                    <div className='Info_view_nameUser'>111</div>
                                </div>
                            </div>
                            <div className='FreeBoardView_content'>
                                <div className='Content_View'>내용 들어갈 곳</div>
                            </div>
                            <div className='FreeBoardView_good'>
                                <div className='Good_btn'>
                                    <button type='button' className='FreeBoardViewGoodBtn'>추천</button>
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