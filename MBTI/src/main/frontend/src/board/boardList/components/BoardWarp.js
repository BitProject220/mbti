import React, { useEffect, useState } from 'react';
import BoardSearching from './boardWarpComponents/BoardSearching';
import BoardListHeader from './boardWarpComponents/BoardListHeader';
import BoardList from './boardWarpComponents/BoardList';
import BoardListTr from './boardWarpComponents/BoardListTr';

import axios from 'axios';
import WriteBoard from './boardWarpComponents/WriteBoard';
import Pagination from './boardWarpComponents/Pagination';
import Post from './boardWarpComponents/Post';


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
                setData(res.data.tableList);
                setSearchResult(res.data.tableList);
            })
            .catch(error => {
                console.log(error);
            })
           },[])

           const [posts, setPosts] = useState([]);
           const [currentPage, setCurrentPage] = useState(1);
           const [postsPerPage, setPostsPerPage] = useState(10);
           
           const indexOfLast = currentPage * postsPerPage;
           const indexOfFirst = indexOfLast - postsPerPage;


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
            
            //페이징
          
            const currentPosts = (posts) => {
                let currentPosts = 0;
                currentPosts = posts.slice(indexOfFirst, indexOfLast);
                return currentPosts;
              };

           
        // 최신순
        // useEffect(() {
        // },[sortOption])

        // const boardListData = searchResult.map(item => (<BoardList boardNo={props.boardNo} key={item.fb_seq} listData={item}  />))
        const boardListData = searchResult.map(item => (<BoardList boardNo={props.boardNo} key={item.fb_seq} listData={item}  />))
        //posts={data} 

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
                    {/* <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={data.length}
                        paginate={setCurrentPage}
                    ></Pagination> */}
                    {/* <BoardPaging 
                    pg={pg} 
                    getPg={getPg}

                    /> */}
                    {/* <Posts posts={currentPosts(data)}></Posts> */}
                    <br />
                    <br />
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