import React from 'react';
import { Link } from 'react-router-dom';
import TOPgrey from '../../img/Top/TOPgrey.png';
import '../css/MbtiBoardView.css';
const MbtiBoardView = () => {
    return (
        <div className='MbtiBoardView_wrap'
        style={{backgroundImage:`url(${ TOPgrey })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'200% 300px',}}>
           <h1>MBTI Board</h1> 
            <div className='MbtiBoardView_form'>
                <div className='MbtiBoardView_document'>
                    <div className='MbtiBoardView_document2'>
                        <div className='MbtiBoardView_document_wrap'>
                            <div className='MbtiBoardView_info'>
                                <div className='Mbti_Info_Mbti'>
                                    <div className='Mbti_Info_mbti_type'>MBTI</div>
                                    <div className='Mbti_Info_mbti_typeUser'>ISFP</div>
                                </div>
                                <div className='Mbti_Info_title'>
                                    <div className='Mbti_Info_title_subject'>제목</div>
                                    <div className='Mbti_Info_title_subjectUser'>제목</div>
                                </div>
                                <div className='Mbti_Info_writer'>
                                    <div className='Mbti_Info_writer_name'>작성자</div>
                                    <div className='Mbti_Info_Writer_nameUser'>작성자</div>
                                </div>
                                <div className='Mbti_Info_date'>
                                    <div className='Mbti_Info_date_name'>작성일</div>
                                    <div className='Mbti_Info_date_nameUser'>0000-00-00</div>
                                </div>
                                <div className='Mbti_Info_good'>
                                    <div className='Mbti_Info_good_name'>추천</div>
                                    <div className='Mbti_Info_good_nameUser'>33</div>
                                </div>
                                <div className='Mbti_Info_view'>
                                    <div className='Mbti_Info_view_name'>조회</div>
                                    <div className='Mbti_Info_view_nameUser'>111</div>
                                </div>
                            </div>
                            <div className='MbtiBoardView_content'>
                                <div className='Mbti_Content_View'>내용 들어갈 곳</div>
                            </div>
                            <div className='Mbti_BoardView_good'>
                                <div className='Mbti_Good_btn'>
                                    <button type='button' className='MbtiBoardViewGoodBtn'>추천</button>
                                </div>
                            </div>
                        </div>
                        <div className='MbtiBoardView_Button'>
                            <div className='Mbti_Button_left'>
                                <Link to='/MbtiBoard' className='Mbti_Btn_left_list'>목록</Link>
                            </div>
                            <div className='Mbti_Button_right'>
                                <Link to='#' className='Mbti_Btn_right_list_update'>수정</Link>
                                <Link to='#' className='Mbti_Btn_right_list_delete'>삭제</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MbtiBoardView;