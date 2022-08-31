import React from 'react';

const BoardListTr = (props) => {
    // console.log("BoardListTr = " + props.boardNo);
    if(props.boardNo === '1') {
        return (
            <thead>
                <tr>
                    <td style={{width:'100px'}} className="kboard-list-uid">번호</td>
                    <td style={{width:'200px'}} className="kboard-list-user">작성자</td>
                    <td style={{width:'450px'}} className="kboard-list-uid">제목</td>
                    <td style={{width:'100px'}} className="kboard-list-vote">추천</td>
                    <td style={{width:'100px'}} className="kboard-list-view">조회</td>
                    <td style={{width:'auto'}} className="kboard-list-date">작성일</td>
                </tr>
            </thead>
        );
    }else if(props.boardNo === '2') {
        return (
            <thead>
                <tr>
                    <td className="kboard-list-uid">번호</td>
                    <td className="kboard-list-type">타입</td>
                    <td className="kboard-list-user">작성자</td>
                    <td className="kboard-list-title">제목</td>
                    <td className="kboard-list-vote">추천</td>
                    <td className="kboard-list-view">조회</td>
                    <td className="kboard-list-date">작성일</td>
                </tr>
            </thead>
        );
    }else return null;
};

export default BoardListTr;