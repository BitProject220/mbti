import React from 'react';

const NoticeBoard = () => {
    return (
        <>
            <tr className="kboard-list-notice">
                <td className="kboard-list-uid">공지사항</td>
                <td className="kboard-list-title">
                    <a href="/tem_board_1/?uid=16&mod=document&pageid=1">
                        <div className="kboard-default-cut-strings">
                            무제한으로 웹사이트를 만드세요.								
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
                        <span className="contents-item kboard-view">조회 7</span>
                    </div> */}
                </td>
                <td className="kboard-list-user">hompion</td>
                <td className="kboard-list-date">2020.07.30</td>
                <td className="kboard-list-vote">0</td>
                <td className="kboard-list-view">7</td>
            </tr>    
        </>
    );
};

export default NoticeBoard;