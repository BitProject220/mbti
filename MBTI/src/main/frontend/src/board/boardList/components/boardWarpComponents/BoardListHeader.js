import React from 'react';

const BoardListHeader = (props) => {
    const sortBy = ["최신순", "추천순", "조회순"];
    
    // }
    const setSortOption =(e) => {
    
        props.getSortOption(e.target.value);
    }
    
    // console.log("선택된 옵션 = "+ selected);

    return (
        <div className="kboard-list-header">
            <div className="kboard-total-count">{`전체 ${props.listCount}`} </div>                    
            <div className="kboard-sort">
                <form id="kboard-sort-form-1" method="get" action="/tem_board_1/" >
                    <select className="kboard_list_sort" onChange={setSortOption}>		
                        {sortBy.map((item)=>(
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};

export default BoardListHeader;