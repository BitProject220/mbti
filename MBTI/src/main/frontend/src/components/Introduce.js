import React, { useState } from 'react';
const Introduce = () => {
    const [count, setCount] = useState(0);

    const onCount = ()=>{
        setCount(count=> count+1);
    }
    return (
        <div>
            <div style={{
             backgroundColor : 'red',
             height :  300,
             }}>이미지영역
             </div>
            <div className='sticky'>           
                <div className='sidediv-left' style={{
                    height :  'auto' ,
                    width: 16+'%',
                    float: 'left',
                    color: 'black',
                    }}>
                    <h2>인적성 보고서</h2>
                    <ul>
                    <a href='/Introduce' className='thispage'><li>소개</li></a>
                    <a href='/StrengthsWeaknesses' className='atherside'><li >강점과 약점</li></a>
                    <a href='/' className='atherside'><li >로맨틱한 관계</li></a>
                    <a href='/' className='atherside'><li >우정</li></a>
                    <a href='/' className='atherside'><li >육아</li></a>
                    <a href='/' className='atherside'><li >직업</li></a>
                    <a href='/' className='atherside'><li >직장 습관</li></a>
                    <a href='/' className='atherside'><li >전체 프로필</li></a>
                    </ul>
                </div>
                <div className='main_description' style={{height :  'auto' ,
                    width: 48+'%',
                    float: 'left',
                    color: 'black',
                    }}>
                    <h1>성격유형: "전략가"</h1>
                    <div className='Blaise_Pascal'>
                        <p> 사고 능력은 인간의 위대한 점 중 하나이다. 인간은 갈대처럼 연약하지만 생각하는 갈대이다.</p>
                        <footer>블레즈 파스칼</footer>
                    </div>

                    <p> 최고가 되는 것은 외로운 일입니다. 매우 희귀한 성격이면서도 뛰어난 능력을 지닌 전략가(INTJ)는 이러한 말의 의미를 잘 알고 있습니다. 
                        전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다. 
                        하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다.</p>
                    <div className='imgDiv'></div>
                    <h2>개척자 정신</h2>
                        <p> 전략가는 모든 것에 의문을 제기합니다. 다른 많은 성격은 현재 상태를 유지하고 일반적인 통념과 다른 사람의 전문 지식에 의존해 살아가곤 합니다. 하지만 비판적인 성향을 지닌 전략가는 자신만의 방식을 찾아내기를 원하며, 일을 진행하는 더 나은 방식을 찾기 위해 규칙을 깨거나 다른 사람의 반대를 무릅쓰는 일도 마다하지 않습니다. 사실 오히려 이러한 과정을 즐기는 편입니다.</p>
                        <p> 전략가는 실제로 활용할 수 있는 아이디어만이 가치가 있다고 생각하며, 단순히 새로운 아이디어를 내는 데 그치는 것이 아니라 아이디어를 이용해 성공을 쟁취하고자 합니다. 이들은 업무에 자신의 모든 통찰력과 논리력과 의지를 쏟아부으며, 불필요한 규칙을 설정하거나 쓸모없는 비판을 제기하면서 자신을 방해하는 사람에게는 가차 없는 모습을 보입니다.</p>
                    <div class="description-pullout">
                        전략가는 매우 독립적인 성격으로 다른 사람의 기대를 따르기보다는 자신만의 아이디어를 추구합니다.
                    </div>
                        <p> 전략가는 독립성이 매우 강하며 혼자서 행동하는 일을 두려워하지 않습니다. 아마 다른 사람을 기다리는 일을 좋아하지 않기 때문일 수도 있습니다. 또한 일반적으로 다른 사람의 의견을 묻지 않고 결정을 내리는 편입니다. 이렇게 혼자서 행동하려는 성향으로 인해 다른 사람의 의견과 욕구와 계획을 무시함에 따라 무신경한 사람처럼 보일 수도 있습니다.</p>
                        <p> 하지만 전략가가 남에게 무심하다는 생각은 사실이 아닙니다. 감정이 풍부하지 않고 지적인 성격이라는 편견이 있기는 하지만 사실 전략가는 예민한 감성을 지니고 있기 때문입니다. 전략가는 일이 잘못되거나 남에게 상처를 주게 되었을 때 슬픔과 후회를 느끼며, 왜 그런 일이 발생했는지 파악하는 데 많은 시간과 에너지를 투자합니다. 결정을 내릴 때 감정을 중시하지 않는다고 해서 감정을 느끼지 못하는 것은 아니기 때문입니다.</p>
                    <h2>지식에 대한 갈망</h2>
                        <p> 전략가는 대담한 몽상가인 동시에 극심한 비관주의자이기도 합니다. 이들은 의지와 지적 능력이 있다면 어떠한 목표라도 성취할 수 있다고 믿지만, 동시에 대부분의 사람이 게으르고 상상력이 부족하고 특별할 것이 없다고 냉소적으로 생각하기도 합니다.</p>
                        <p> 전략가의 자존감은 대부분 자신의 지식과 지적 능력에 기반을 두고 있습니다. 학교에서 &#039;책벌레&#039;나 &#039;범생이&#039;라는 소리를 듣기도 하지만, 이러한 말을 모욕이 아닌 자신의 특징으로 받아들입니다. 또한 자신에게 코딩, 무술, 클래식 음악 등 관심이 있는 분야라면 어떤 분야든지 최고가 될 수 있는 능력이 있다는 사실을 알고 있습니다.</p>
                    <div class="description-pullout">
                        전략가가 새로운 것을 배우는 이유는 남에게 보여주기 위해서가 아니라 자신의 지식을 확장하는 일 자체를 즐기기 때문입니다.
                    </div>
                        <p> 전략가는 완고할 때가 있으며 주의가 산만한 환경이나 불필요한 잡담 등 시시한 일을 참지 못합니다. 하지만 그렇다고 이들이 지루하거나 재미없는 성격이라는 의미는 아닙니다. 진지해 보이는 모습과 달리 재치가 넘치며. 날카롭게 비꼬면서도 재미있는 유머 감각을 지니고 있는 경우가 많기 때문입니다.</p>
                    <h2>상대적으로 취약한 사교 능력</h2>
                        <p> 일반적으로 전략가가 따뜻하고 부드러운 성격은 아닙니다. 겸손함과 인사치레보다는 이성과 성공을 중시하며, 입바른 말을 하기보다는 솔직하게 이야기하는 성격이기 때문입니다. 소설이나 영화의 악당이 전략가의 성격을 지닌 것으로 표현되는 이유도 바로 이러한 점 때문일 것입니다.</p>
                        <p> 솔직함을 중시하고 핵심만을 이야기하려는 전략가는 잡담과 빈말 등 일반적인 사교 활동이 무의미하거나 멍청하다고 생각할 수 있습니다. 이로 인해 솔직함에만 집중하느라 무례하거나 공격적인 사람처럼 보일 수도 있습니다.</p>
                    <div class="description-pullout">
                        전략가는 가끔 다른 사람을 대하는 일 자체가 불필요한 것은 아닌지 생각할 때가 있습니다.
                    </div>
                        <p> 하지만 전략가도 다른 성격과 마찬가지로 다른 사람과의 소통을 원합니다. 다만 자신과 가치관이 비슷한 사람을 만나고 싶어하며, 그럴 수 없다면 차라리 혼자 있는 것을 선택할 뿐입니다. 이들은 자신의 관심사에 집중할 때 자신감을 발산하는 성격으로, 이러한 자신감은 직장 동료와 관계를 맺거나 친구나 연인을 사귈 때 도움이 되기도 합니다.</p>
                    <h2>체스 경기와 같은 삶</h2>
                        <p> 전략가는 모순이 가득한 성격입니다. 상상력이 넘치면서도 결단력이 강하고, 야망이 넘치면서도 차분하고, 호기심이 많으면서도 집중력이 높은 성격이기 때문입니다. 다른 사람은 모순적인 전략가의 성격을 이해하기 힘들다고 생각할 수도 있지만, 전략가의 사고방식을 생각하면 이러한 모순도 이해할 수 있습니다.</p>
                        <p> 전략가에게 삶은 거대한 체스 경기와 같습니다. 이들은 운보다는 전략에 의존하며 결정을 내릴 때마다 결정으로 인한 장단점을 심사숙고합니다. 또한 아무리 힘든 일이 생기더라도 지적 능력과 통찰력을 이용하면 승리할 방법을 찾을 수 있다고 믿습니다.</p>
                    </div>
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
            <div className='BtnComponent'>
                <div className='nextBtn'>
                    <a href='/StrengthsWeaknesses'>
                        <div className='title'>강점과 약점</div>
                        <div className='BtnCircle'>&#8594;</div>
                    </a>
                </div>
                <div className='wrapper'>
                    <div className='social'>
                        <div className='social-count'>
                            <div className='social-number'>{count}</div>
                            <div className='social-p'>SHARES</div>
                        </div>
                        <div className='social-icons'>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } class="btn_comm"><img src={require('../img/detail_facebook_share.png') } alt='페이스북 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } class="btn_comm"><img src={require('../img/detail_twitter_share.png') } alt='트위터 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } class="btn_comm"><img src={require('../img/detail_pinterest_share.png') } alt='핀터레스트 공유하기'/></button></a>
                            <a href='//naver.com' target='_blank' rel='noreferrer'><button type="button" onClick={ onCount } class="btn_comm"><img src={require('../img/detail_discode_share.png') } alt='디스코드 공유하기'/></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;