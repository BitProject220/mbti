import React, { useEffect, useState } from 'react';
import BoardSearching from './boardWarpComponents/BoardSearching';
import BoardListHeader from './boardWarpComponents/BoardListHeader';
import BoardList from './boardWarpComponents/BoardList';
import BoardListTr from './boardWarpComponents/BoardListTr';
import BoardPaging from './boardWarpComponents/BoardPaging';

import axios from 'axios';
import WriteBoard from './boardWarpComponents/WriteBoard';


const BoardWarp = (props) => {
  
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

        const [data, setData] =useState([]);
        const [searchResult, setSearchResult] = useState([])

        useEffect(() => {
           axios({
            method: 'get',
            url: props.boardType,
            dataType: 'json',
           })
           .then(res=>{
                console.log("서버 데이터 = "+ res.data);
                setData(res.data.tableList);
                setSearchResult(res.data.tableList);
            })
            .catch(error => {
                console.log(error);
            })
           },[])


        useEffect(() => {
            if(!searchKeyword){
                setSearchResult(data);
            }
            if(searchKeyword){
                console.log('searchKeyword 변경됨...', searchKeyword);
                const resultTemp = data.filter((item, index) => item.fb_subject.indexOf(searchKeyword) >= 0); 
                setSearchResult(resultTemp);
            }
        },[searchKeyword])
        
        



        const boardListData = searchResult.map(item => (<BoardList boardNo={props.boardNo} key={item.fb_seq} listData={item} />))


        //    const [searchTerm, setSearchTerm] = useState("");
        //    const getSearchTerm = (e) =>{}



    return (
        <div className="wp_notice_wrap">
            <div className="wp_notice_title">
                <h1>{props.boardName}</h1>
            </div>
            
            <div className="wp_notice_area">
                <div id="kboard-default-list">
                    <BoardListHeader
                        listCount={searchResult.length} 
                        getSortOption={getSortOption}            
                    />
                    <div className="kboard-list">
                        <table>
                            <BoardListTr boardNo={props.boardNo} />
                            <tbody>
                                {boardListData}
                            </tbody> 
                        </table>
                    </div>
                    {/* <BoardPaging 
                    pg={pg} 
                    getPg={getPg}

                    /> */}
                    <div>{searchKeyword}</div>
                    <BoardSearching 
                        searchBy={props.searchBy}
                        getCategory={getCategory} 
                        getSearchKeyword={getSearchKeyword}                        
                    />
                    <WriteBoard boardNo={props.boardNo} />
                </div>
            </div>
        </div>
    );
};

export default BoardWarp;