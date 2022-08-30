import React from 'react';

const BoardPaging = (props) => {
    
    const setPg = (e) =>{
        e.preventDefault();
        props.getPg(e.target.value);
    }

    // const [pgNo, setPgNo] = useState('1');
    // const clickedPg = (e) =>{
    //     e.preventDefault();
    //     setPgNo(e.target.value)

    // }


    return (
        <div className="kboard-pagination">
            <ul className="kboard-pagination-pages" onClick={setPg} value={props.pg}>
                <li className="active"><a href='#'>1</a></li>
                <li ><a href="?pageid=2&mod=list">2</a></li>
                <li className="next-page"><a href="#">»</a></li>
                <li className="last-page"><a href="#">마지막</a></li>		
            </ul>
        </div>
    );
};

export default BoardPaging;