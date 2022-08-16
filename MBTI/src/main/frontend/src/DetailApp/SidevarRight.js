import React from 'react';

const SidevarRight = () => {
    return (
        <div>
            <div className='sidediv-right' style={{
                        width: 22+'%',
                        float: 'left',
                        height :  'auto' ,
                        marginLeft: 40, }}>

                        <div className="MBTI-info" style={{
                        color: 'black',
                        height: 200,
                        textAlign: 'center',
                        border: '1px solid gray',
                        borderRadius: 10,
                        padding: 30,
                        }}>
                        <div className='title'>MBTI 알아보기</div>
                                <a href=""><div className='MBTI-test'>테스트하기</div></a>
                            <div className='text-box'>
                                <div className='coment' style={ { float:'left',}}>이미 결과가 있습니까?</div>
                                <div className='login-link' style={ { float:'left', marginLeft: 5, textDecoration: 'underline'}}>로그인.</div>
                            </div>
                        </div>
                        <div className='Day-news'style={{
                        color: 'black',
                        height: 200,
                        textAlign: 'center',
                        border: '1px solid gray',
                        borderRadius: 10,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 30,
                        paddingBottom: 30,
                        marginTop:120,
                        }}>
                            <div className='title'>오늘의 통찰력</div>
                            <div className='coment-p'>건축가는 종종 최악의 상황을 예상할 가능성이 가장 높은 성격 유형입니다.</div>
                            <div className='source'>
                                <div className='coment-p' style={{color: '#bcbfc5',}}>출처:<a href=''> 낙관주의자인가 비관주의자인가?</a> 설문조사, 4567897명의 응답</div>
                            </div>
                        </div>
                    </div>   
        </div>
    );
};

export default SidevarRight;