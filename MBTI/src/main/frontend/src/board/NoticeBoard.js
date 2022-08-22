import React from 'react';

const NoticeBoard = () => {
    return (
        <>
            <tr class="kboard-list-notice">
                <td class="kboard-list-uid">공지사항</td>
                <td class="kboard-list-title">
                    <a href="/tem_board_1/?uid=16&mod=document&pageid=1">
                        <div class="kboard-default-cut-strings">
                            무제한으로 웹사이트를 만드세요.								
                            <span class="kboard-comments-count"></span>
                        </div>
                    </a>
                    {/* <div class="kboard-mobile-contents">
                        <span class="contents-item kboard-user">hompion</span>
                        <span class="contents-separator kboard-date">|</span>
                        <span class="contents-item kboard-date">2020.07.30</span>
                        <span class="contents-separator kboard-vote">|</span>
                        <span class="contents-item kboard-vote">추천 0</span>
                        <span class="contents-separator kboard-view">|</span>
                        <span class="contents-item kboard-view">조회 7</span>
                    </div> */}
                </td>
                <td class="kboard-list-user">hompion</td>
                <td class="kboard-list-date">2020.07.30</td>
                <td class="kboard-list-vote">0</td>
                <td class="kboard-list-view">7</td>
            </tr>    
        </>
    );
};

export default NoticeBoard;