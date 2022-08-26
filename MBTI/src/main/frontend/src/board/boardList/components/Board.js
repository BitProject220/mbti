import React from 'react';
import Banner from './Banner';
import BoardWarp from './BoardWarp';


const Board = (props) => {
    return (
        <div id="wrap">
            <div className="board_content_wrap" id="contents">
                <div className="board_content_area board_section_1">
                    <Banner />
                    <BoardWarp boardName={props.boardName} />
                </div>
            </div>
        </div>
    );
};

export default Board;