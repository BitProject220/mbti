import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import BoardList from './BoardList';
import NoticeBoard from './NoticeBoard';

const MbtiBoard = () => {
    return (
        <div className='MbtiBoard'>
            <Header />
            <div>
            <div id="wrap"> 
                <div class="board_content_wrap" id="contents">
                    <div class="board_content_area board_section_1">
                        <div class="board_banner_area">
                            <div class="board_banner_text">
                                <h1>MBTI</h1>
                                <p>Check out the news and notices!</p>
                            </div>
                            {/* <img src="https://template.hompion.com/wp-content/themes/theme_template/images/board/tem_1/board_banner_1.jpg" class="pc" alt="공지사항 배너 이미지" />
                            <img src="https://template.hompion.com/wp-content/themes/theme_template/images/board/tem_1/mo_board_banner_1.jpg" class="mo" alt="공지사항 배너 이미지" /> */}
                        </div>
                        <div class="wp_notice_wrap">
                            <div class="wp_notice_title">
                                <h1>MBTI</h1>
                            </div>
                            <div class="wp_notice_area">
                                <div id="kboard-default-list">
                    

                    <div class="kboard-list-header">
                        <div class="kboard-total-count">전체 15</div>                    
                        <div class="kboard-sort">
                            <form id="kboard-sort-form-1" method="get" action="/tem_board_1/" >
                                <input type="hidden" name="mod" value="list"/>
                                <input type="hidden" name="pageid" value="1"/>
                                <input type="hidden" name="kboard_list_sort_remember" value="1" />				
                                <select name="kboard_list_sort" onchange="jQuery('#kboard-sort-form-1').submit();">
                                    <option value="newest" selected>최신순</option>
                                    <option value="best">추천순</option>
                                    <option value="viewed">조회순</option>
                                    <option value="updated">업데이트순</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div class="kboard-list">
                        <table>
                            <thead>
                                <tr>
                                    <td class="kboard-list-uid">번호</td>
                                    <td class="kboard-list-title">제목</td>
                                    <td class="kboard-list-user">작성자</td>
                                    <td class="kboard-list-date">작성일</td>
                                    <td class="kboard-list-vote">추천</td>
                                    <td class="kboard-list-view">조회</td>
                                </tr>
                            </thead>
                            <tbody>
                                <NoticeBoard />
                                <BoardList />
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- 리스트 끝 -->
                    
                    <!-- 페이징 시작 --> */}
                    <div class="kboard-pagination">
                        <ul class="kboard-pagination-pages">
                            <li class="active"><a href="?pageid=1&mod=list" onclick="return false">1</a></li>
                            <li><a href="?pageid=2&mod=list">2</a></li>
                            <li class="next-page"><a href="?pageid=2&mod=list">»</a></li>
                            <li class="last-page"><a href="?pageid=2&mod=list">마지막</a></li>		
                        </ul>
                    </div>
                    {/* <!-- 페이징 끝 -->
                    
                    <!-- 검색폼 시작 --> */}
                    <div class="kboard-search">
                        <form id="kboard-search-form-1" method="get" action="/tem_board_1/?pageid=1">
                            <input type="hidden" name="mod" value="list" />
                            <input type="hidden" name="pageid" value="1" />			
                            <select name="target">
                                <option value="">전체</option>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                                <option value="member_display">작성자</option>
                            </select>
                            <input type="text" name="keyword" value="" />
                            <button type="submit" class="kboard-default-button-small">검색</button>
                        </form>
                    </div>
                    {/* <!-- 검색폼 끝 -->
                    
                        <!-- 버튼 시작 --> */}
                    <div class="kboard-control">
                        <a href="/MbtiBoardWriteMain" class="kboard-default-button-small">글쓰기</a>
                    </div>
                    {/* <!-- 버튼 끝 -->
                        */}
                    </div>
                    {/* <!--wp_notice_area end--></form>             */}
                    </div>
                    {/* <!--wp_notice_wrap end--> */}
                    </div>
                    {/* <!--board_section_1 end--> */}
                    </div>
                    {/* <!--board_content_wrap end--> */}
                </div>
                
                {/* <!--wrap end--> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MbtiBoard;