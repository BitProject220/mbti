import React from 'react';
import Footer from '../../main/Footer';
import Header from '../../main/Header';
import Board from './components/Board';
import '../css/board.css';

const MbtiBoard = () => {
    // const [message, setMessage] = useState("");
    // useEffect(() => {
    // fetch('/freeBoard')
    // .then(response => response.text())
    // .then(message => {
    // setMessage(message);
    // });
    // },[])

    const MbtiSearchBy = ["전체","제목","내용","작성자","타입"];
    // console.log(MbtiSearchBy);

    return (
        <div className='MbtiBoard'>
            <Header />
            <Board boardNo='2' boardType='board/mbtiBoardList' boardName='MBTI 게시판' searchBy={MbtiSearchBy} />
            <Footer />
        </div>
    );
};

export default MbtiBoard;
