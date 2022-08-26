import React from 'react';


const BoardList = (props) => {
    const isMbtiBoard = props.listData.type;
    console.log("type = " + props.listData.type);

    if(isMbtiBoard === 1) {return <td className="kboard-list-mbti">INTJ-A / INTJ-T</td>}
    else if(isMbtiBoard === 2) {return <td className="kboard-list-mbti">ENTJ-A / ENTJ-T</td>}
    else if(isMbtiBoard === 3) {return <td className="kboard-list-mbti">ISTJ-A / ISTJ-T</td>}
    
    return (
        <>
            <tr className="">
                <td className="kboard-list-uid">{props.listData.seq}</td>
                {isMbtiBoard}
                <td className="kboard-list-title">
                    <a href="/tem_board_1/?uid=25&mod=document&pageid=1">
                        <div className="kboard-default-cut-strings">
                        {props.listData.title}
                        <span className="kboard-comments-count"></span>
                        </div>
                    </a>
                    {/* <div className="kboard-mobile-contents">
                    <span className="contents-item kboard-user">hompion</span>
                    <span className="contents-separator kboard-date">|</span>
                    <span className="contents-item kboard-date">2020.07.30</span>
                    <span className="contents-separator kboard-vote">|</span>
                    <span className="contents-item kboard-vote">추천 0</span>
                    <span className="contents-separator kboard-view">|</span>
                    <span className="contents-item kboard-view">조회 20</span>
                    </div> */}
                </td>
                <td className="kboard-list-user">{props.listData.nickname}</td>
                <td className="kboard-list-date">{props.listData.date}</td>
                <td className="kboard-list-vote">{props.listData.vote}</td>
                <td className="kboard-list-view">{props.listData.view}</td>
            </tr>
        </>
    );
};

export default BoardList;