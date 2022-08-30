import React, { useEffect, useState } from 'react';
import BoardSearching from './boardWarpComponents/BoardSearching';
import BoardListHeader from './boardWarpComponents/BoardListHeader';
import BoardList from './boardWarpComponents/BoardList';
import BoardListTr from './boardWarpComponents/BoardListTr';
import BoardPaging from './boardWarpComponents/BoardPaging';

import axios from 'axios';

// import Data from './data/boardListData.json';

const BoardWarp = (props) => {
    //검색기능
    // const searchBy = props.searchBy;
    // const [searchCondition, setSearchCondition] = useState({
    //     category:"",
    //     searchKeyword: "",
    // });
    
    // const getSearchCondition=(e)=>{
    //     setSearchCondition(e);
    // }
    // // console.log("검색조건 = " + searchCondition.category + " 키워트 = " + searchCondition.searchKeyword);
    
    // //정렬기능
    // const sortBy = ["최신순", "추천순", "조회순", "업데이트순"];
    // const [sortOption, setSortOption] = useState("");
    // // console.log("초기 sortBy = " + sortBy);
    // const getSortOption = (e) =>{
    //     setSortOption(e);
    // }

    // // 자유게시판 또는 MBTI 게시판 별 검색어 구분 리스트를 props로 받아 BoardSearching 컴포넌트에 props로 전달함
    // // 입력 시점 FreeBoard.js 또는 MbtiBorad.js


    // //페이징처리 
    // const [pg, setPg] = useState(1);
    // const getPg=(e)=>{
    //     setPg(e);
    // }
    // // console.log("getPg = " + pg);

    // console.log("###검색내용 = " + searchCondition.searchKeyword)
    // console.log("###카테고리 = " + searchCondition.category)
    // console.log("###pg = " + pg)
    // console.log("###정렬옵션 = " + sortOption)

    
    //  useEffect(() => {
    //     fetch('/test',
    //         {
    //         method: 'post',
    //         body: ({
    //             pg: pg,
    //             sortOption : sortOption,
    //             category: searchCondition.category,
    //             searchKeyword: searchCondition.searchKeyword
    //             })
    //         })
    //         .then(res => res.json())
    //         .then(res => {
    //             if(res.success){
    //                 console.log(res);
    //             }else alert("fail")
    //         })
    //  })

    
        const boardNo = props.boardNo;

        const [pg, setPg] = useState(1);
        const getPg = (e) =>{
            setPg(e);
        }

        const [sortOption, setSortOption] = useState("최신순");
        const getSortOption = (e) =>{
            setSortOption(e);
        }
        console.log("변경되는 부모 정렬방식 : " + sortOption)

        const [category, setCategory] = useState('전체');
        const getCategory = (e) =>{
            setCategory(e);
        }


        const [searchKeyword, setSearchKeyword] = useState('')
        const getSearchKeyword = (e) =>{
            setSearchKeyword(e);
        }


        //초기값
        // const searchCondition = {
        //     boardNo: boardNo,
        //     pg: pg,
        //     sortOption: sortOption,
        //     category: "전체",
        //     searchKeyword: "",
        // }
        console.log("검색조건 변경? :" + sortOption)
        

        const [data, setData] =useState([]);

        useEffect(() => {
           axios({
            method: 'get',
            url: 'http://localhost:8080/board/freeBoardList',
            
            // params: {
            //     boardNo: boardNo,
            //     pg: pg,
            //     sortOption: sortOption,
            //     category: category,
            //     searchKeyword: searchKeyword,
            // }
           })
           .then(res=>{
                console.log("서버 데이터 = "+ res.data.tableList);
                setData(res.data.tableList);
            })
            .catch(error => {
                console.log(error);
            })
           },[])


           const boardListData = data.map(item => (<BoardList key={item.fb_seq} listData={item} />))

    
    return (
        <div className="wp_notice_wrap">
            <div className="wp_notice_title">
                <h1>{props.boardName}</h1>
            </div>
            <div className="wp_notice_area">
                <div id="kboard-default-list">
                    <BoardListHeader
                        listCount={data.length} 
                        getSortOption={getSortOption}            
                    />
                    <div className="kboard-list">
                    {/* <ul>
                        <li>보드 종류 = {data.tableList.fb_seq}</li>
                        <li>정렬방식 = {data.tableList.sortOption}</li>
                        <li>카테고리 = {data.tableList.category}</li>
                        <li>검색내용 = {data.tableList.searchKeyword}</li>
                    </ul> */}
                        <table>
                            <BoardListTr boardNo={props.boardNo} />
                            <thead>
                                <tr>
                                    <td className="kboard-list-uid">바보</td>
                                    <td className="kboard-list-name">타입</td>
                                    <td className="kboard-list-title">제목</td>
                                    <td className="kboard-list-user">작성자</td>
                                    <td className="kboard-list-date">작성일</td>
                                    <td className="kboard-list-vote">추천</td>
                                    <td className="kboard-list-view">조회</td>
                                </tr>
                            </thead>
                            <tbody>
                            {boardListData}
                            </tbody> 
                        </table>
                    </div>
                    {/* <BoardPaging 
                    pg={pg} 
                    getPg={getPg}

                    /> */}

                    <BoardSearching 
                        searchBy={props.searchBy}
                        getCategory={getCategory} 
                        getSearchKeyword={getSearchKeyword}                        
                    />
                    <div className="kboard-control">
                        <a href="/FreeBoardWriteMain" className="kboard-default-button-small">글쓰기</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardWarp;


    // const [message, setMessage] = useState("");
    // useEffect(() => {
    // fetch('/test')
    // .then(response => response.text())
    // .then(message => {
    // setMessage(message);
    // });
    // },[])


      // if(props.boardNo === 1){
    //     console.log(FreeBoardListData);
    //     setBoardListData(FreeBoardListData);
    // }else if(props.boardNo === 2){
    //     console.log(Data);
    //     setBoardListData(Data);
    // }
 