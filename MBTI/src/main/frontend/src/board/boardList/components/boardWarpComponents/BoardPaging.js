import React from 'react';
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
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
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <nav>
          <PageUl className="pagination">
            {pageNumbers.map((number) => (
              <PageLi key={number} className="page-item">
                <PageSpan onClick={() => paginate(number)} className="page-link">
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


// const BoardPaging = (props) => {
    
//     const setPg = (e) =>{
//         e.preventDefault();
//         props.getPg(e.target.value);
//     }

//     // const [pgNo, setPgNo] = useState('1');
//     // const clickedPg = (e) =>{
//     //     e.preventDefault();
//     //     setPgNo(e.target.value)

//     // }







// <div className="kboard-pagination">
//     <ul className="kboard-pagination-pages" onClick={setPg} value={props.pg}>
//         <li className="active"><a href='#'>1</a></li>
//         <li ><a href="?pageid=2&mod=list">2</a></li>
//         <li className="next-page"><a href="#">»</a></li>
//         <li className="last-page"><a href="#">마지막</a></li>		
//     </ul>
// </div>
// );
// };

// export default BoardPaging;