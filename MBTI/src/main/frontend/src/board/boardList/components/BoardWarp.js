import React, { useState } from 'react';
import BoardList from './BoardList';
import Data from './data/boardListData.json';

const BoardWarp = (props) => {
    const selectList = ["최신순", "추천순", "조회순", "업데이트순"];
    const [selected, setSelected] = useState("");
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    
    const searchList =["전체","제목","내용","작성자","타입"];
    const [searchSelectList, setSearchSelectList] = useState("");
    const handleSearchSelectList =(e) =>{
        setSearchSelectList(e.target.value);
    };

    const [inputText, setInputText] = useState("");
    const holdText = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className="wp_notice_wrap">
            <div className="wp_notice_title">
                <h1>{props.boardName}</h1>
            </div>
            <div className="wp_notice_area">
                <div id="kboard-default-list">
                    <div className="kboard-list-header">
                        <div className="kboard-total-count">전체{Data.length} </div>                    
                        <div className="kboard-sort">
                            <form id="kboard-sort-form-1" method="get" action="/tem_board_1/" >
                                <input type="hidden" name="mod" value="list"/>
                                <input type="hidden" name="pageid" value="1"/>
                                <input type="hidden" name="kboard_list_sort_remember" value="1" />		
                                <select className="kboard_list_sort" onChange={handleSelect} value={selected}>		
                                {selectList.map((item)=>(
                                    <option  key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                                </select>
                                {/* <select className="kboard_list_sort" onchange={handleSelect} value={selected}>
                                    <option value="newest" selected>최신순</option>
                                    <option value="best">추천순</option>
                                    <option value="viewed">조회순</option>
                                    <option value="updated">업데이트순</option>
                                </select> */}
                            </form>
                        </div>
                    </div>
                    <div className="kboard-list">
                        <table>
                            <thead>
                                <tr>
                                    <td className="kboard-list-uid">번호</td>
                                    <td className="kboard-list-name">타입</td>
                                    <td className="kboard-list-title">제목</td>
                                    <td className="kboard-list-user">작성자</td>
                                    <td className="kboard-list-date">작성일</td>
                                    <td className="kboard-list-vote">추천</td>
                                    <td className="kboard-list-view">조회</td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <NoticeBoard /> */}
                                {Data.map(listData=>(
                                    <BoardList key={listData.seq} listData={listData} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="kboard-pagination">
                        <ul className="kboard-pagination-pages">
                            <li className="active"><a href="?pageid=1&mod=list" onClick="return false">1</a></li>
                            <li><a href="?pageid=2&mod=list">2</a></li>
                            <li className="next-page"><a href="?pageid=2&mod=list">»</a></li>
                            <li className="last-page"><a href="?pageid=2&mod=list">마지막</a></li>		
                        </ul>
                    </div>
                    <div className="kboard-search">
                        <form id="kboard-search-form-1" method="get" action="/tem_board_1/?pageid=1">
                            <input type="hidden" name="mod" value="list" />
                            <input type="hidden" name="pageid" value="1" />			
                            <select className="kboard_list_sort" onChange={handleSearchSelectList} value={searchSelectList}>
                                {searchList.map((item)=>(
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            {/* <select name="target">
                                <option value="">전체</option>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                                <option value="member_display">작성자</option>
                                <option value="mbti-type">타입</option>
                            </select> */}
                            <input type="text" name="keyword" onChange={holdText} value={inputText} />
                            <button type="submit" className="kboard-default-button-small">검색</button>
                        </form>
                    </div>
                    <div className="kboard-control">
                        <a href="/BoardWriteMain" className="kboard-default-button-small">글쓰기</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardWarp;