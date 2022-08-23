import React from 'react';

const BoardList = () => {
    return (
        <>
            <tr class="">
                <td class="kboard-list-uid">11</td>
                <td class="kboard-list-title">
                    <a href="/tem_board_1/?uid=25&mod=document&pageid=1">
                        <div class="kboard-default-cut-strings">
                        웹/앱 UX 기획자를 위한 참고 사이트 정리
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
                <span class="contents-item kboard-view">조회 20</span>
                </div> */}
                </td>
                <td class="kboard-list-user">hompion</td>
                <td class="kboard-list-date">2020.07.30</td>
                <td class="kboard-list-vote">0</td>
                <td class="kboard-list-view">20</td>
            </tr>
        </>
    );
};

export default BoardList;