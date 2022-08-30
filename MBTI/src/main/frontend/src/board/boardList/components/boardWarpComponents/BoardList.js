import React, { useState } from 'react';


// const MbtiType = (props)=> {
//     const noMbti = props.listData.type;

//     if(noMbti === 1){
//         return <tr className="kboard-list-mbti">INTJ-A / INTJ-T</tr>
//     }else if(noMbti === 2){
//         return <tr className="kboard-list-mbti">ENTJ-A / ENTJ-T</tr>
//     }else if(noMbti === 3){
//         return <tr className="kboard-list-mbti">ISTJ-A / ISTJ-T</tr>
//     }else return null;
// }


const BoardList = (props) => {
    // console.log("보드리스트 보드넘버 = " + props.boardNo)
    // console.log("리스트데이터 타입 = " + props.listData.type)
    // console.log("Data for BoardList = " + props.listData.title)

    // if(props.boardNo === '1'){
        return (
            <>
                <tr>
                    <td className="kboard-list-uid">{props.listData.fb_seq}</td>
                    <td className="kboard-list-title">
                        {/* <a href="/tem_board_1/?uid=25&mod=document&pageid=1"> */}
                            <div className="kboard-default-cut-strings">
                                {props.listData.fb_subject}
                                <span className="kboard-comments-count"></span>
                            </div>
                        {/* </a> */}
                    </td>
                    <td className="kboard-list-user">{props.listData.fb_name}</td>
                    <td className="kboard-list-date">{props.listData.fb_logtime}</td>
                    <td className="kboard-list-vote">{props.listData.fb_freevote}</td>
                    <td className="kboard-list-view">{props.listData.fb_hit}</td>
                </tr>
            </>

        );
    // }else if(props.boardNo === '2'){
    //     return(
    //         <>
    //             <tr>
    //                 <td className="kboard-list-uid">{props.listData.mb_seq}</td>
    //                                 {/* {typeTd} */}
    //                                 {
    //                         (function(){
    //                         if(props.listData.mb_category === 1){
    //                             return <td className="kboard-list-mbti">INTJ-A / INTJ-T</td>
    //                         }else if(props.listData.mb_category === 2){
    //                             return <td className="kboard-list-mbti">ENTJ-A / ENTJ-T</td>
    //                         }else if(props.listData.mb_category === 3){
    //                             return <td className="kboard-list-mbti">ISTJ-A / ISTJ-T</td>
    //                         }else return "";
    //                         })()
    //                     }
    //                 <td className="kboard-list-title">
    //                     {/* <a href="/tem_board_1/?uid=25&mod=document&pageid=1"> */}
    //                         <div className="kboard-default-cut-strings">
    //                             {props.listData.mb_subject}
    //                             <span className="kboard-comments-count"></span>
    //                         </div>
    //                     {/* </a> */}
    //                 </td>
    //                 <td className="kboard-list-user">{props.listData.mb_name}</td>
    //                 <td className="kboard-list-date">{props.listData.mb_logtime}</td>
    //                 <td className="kboard-list-vote">{props.listData.mb_freevote}</td>
    //                 <td className="kboard-list-view">{props.listData.mb_hit}</td>
    //             </tr>
    //         </>
    //     );
//     }else return null;
}

export default BoardList;