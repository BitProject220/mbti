import React from 'react';
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: gray;
  margin: 1px;
  padding: 1px;
  border-top: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
  ${'' /* background-color: lightgray; */}
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: lightgray;
  }
  &:focus::after {
    color: white;
    background-color: lightgray;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: lightgray;
  }
`;
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <nav className="kboard-pagination">
          <PageUl className="kboard-pagination-pages" >
            {pageNumbers.map((number) => (
              <PageLi key={number} >
                <PageSpan onClick={() => paginate(number)} className="active">
                  {number}
                </PageSpan>
              </PageLi>
            ))}
          </PageUl>
        </nav>
      </div>
    );
  };
  
  export default Pagination;
