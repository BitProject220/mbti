import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



const BoardList = (props) => {
    
    // const navigate = useNavigate();
    // const onNavigate = () => {
    //     navigate(`/${props.detail.path}`, {
    //         state: {
    //             seq: props.listData.fb_seq}});
    // }
    
    if(props.boardNo === '1'){
        
       return (
            <>
                <tr>
                    <td className="kboard-list-uid">{props.listData.fb_seq}</td>
                    <td className="kboard-list-title">
                        <a href="/FreeBoardViewMain" seq={props.listData.fb_seq}>
                            <div className="kboard-default-cut-strings">
                                {props.listData.fb_subject}
                                <span className="kboard-comments-count"></span>
                            </div>
                        </a>
                    </td>
                    <td className="kboard-list-user">{props.listData.fb_name}</td>
                    <td className="kboard-list-date">{props.listData.fb_logtime}</td>
                    <td className="kboard-list-vote">{props.listData.fb_freevote}</td>
                    <td className="kboard-list-view">{props.listData.fb_hit}</td>

                </tr>
            </>

        );
    }else if(props.boardNo === '2'){
        return(
            <>
                <tr>
                    <td className="kboard-list-uid">{props.listData.mb_seq}</td>
                    <td className="kboard-list-mbti">{props.listData.mb_category}</td>
                    <td className="kboard-list-title">
                        <a  href="/MbtiBoardViewMain" seq={props.listData.mb_seq}>
                            <div className="kboard-default-cut-strings">
                                {props.listData.mb_subject}
                                <span className="kboard-comments-count"></span>
                            </div>
                        </a>
                    </td>
                    <td className="kboard-list-user">{props.listData.mb_name}</td>
                    <td className="kboard-list-date">{props.listData.mb_logtime}</td>
                    <td className="kboard-list-vote">{props.listData.mb_freevote}</td>
                    <td className="kboard-list-view">{props.listData.mb_hit}</td>
                </tr>
            </>
        );
    }else return null;
}

export default BoardList;