import React from 'react';
import { Link } from 'react-router-dom';

const WriteBoard = (props) => {
    if(props.boardNo === '1'){
        return (
            <div className="kboard-control" >
                <Link to='/FreeBoardWriteMain' className="kboard-default-button-small">글쓰기</Link>
            </div>
                );
    }else if(props.boardNo === '2'){
        return(
            <div className="kboard-control">
                <Link to='/MbtiBoardWriteMain' className="kboard-default-button-small">글쓰기</Link>
            </div>            
                );
    }
};

export default WriteBoard;