import React, { useState } from 'react';

const StrengthsWeaknesses = () => {
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
                    <a href='/Introduce' className='atherside'><li>소개</li></a>
                    <a href='/StrengthsWeaknesses' className='thispage'><li >강점과 약점</li></a>
                    <a href='/' className='atherside'><li >로맨틱한 관계</li></a>
                    <a href='/' className='atherside'><li >우정</li></a>
                    <a href='/' className='atherside'><li >육아</li></a>
                    <a href='/' className='atherside'><li >직업</li></a>
                    <a href='/' className='atherside'><li >직장 습관</li></a>
                    <a href='/' className='atherside'><li >전체 프로필</li></a>
                    </ul>
                </div>
                <div className='main_description' style={{height :  'auto' ,
                    width: 50+'%',
                    float: 'left',
                    color: 'black',
                    }}>
                    <h1>강점과 약점</h1>
                    <h2>건축가(INTJ) 강점</h2>
                    <div className='imgDiv'></div>
                        <p><strong>&emsp;합리적</strong> – 건축가는 마음의 힘에 자부심을 느낍니다. 그들은 거의 모든 도전을 합리적 사고 능력을 연마하고 지식을 확장할 수 있는 기회로 
                            재구성할 수 있으며, 이러한 사고 방식으로 가장 어려운 문제에 대한 독창적인 솔루션을 고안할 수 있습니다.</p>
                        <p><strong>&emsp;정보</strong> 에 입각함 – 합리적이고 정확하며 증거 기반 의견을 개발하는 데 건축가만큼 헌신적인 성격 유형은 거의 없습니다. 
                            직감이나 반쯤 구어진 가정보다는 연구와 분석에 근거하여 결론을 내립니다. 이것은 그들에게 의견 불일치에 직면하더라도 자신의 아이디어를 
                            옹호해야 한다는 확신을 줍니다.</p>
                        <p><strong>&emsp;독립</strong> - 이러한 성격의 경우 순응은 평범함과 동의어입니다. 창의적이고 자기 의욕이 넘치는 건축가는 자신의 방식대로 일을 하려고 
                        노력합니다. 그들은 임의의 규칙이나 관습이 성공을 가로막는 것을 허용하는 것보다 더 좌절스러운 일을 상상할 수 있습니다.</p>
                        <p><strong>&emsp;결단력</strong> - 이 성격 유형은 야심적이고 목표 지향적인 것으로 알려져 있습니다. 건축가는 성공에 대한 자신의 정의를 달성할 때까지
                        쉬지 않을 것입니다. 이는 일반적으로 자신에게 중요한 주제와 추구를 숙달하는 것을 수반합니다.</p>   
                        <p><strong>&emsp;호기심</strong> - 건축가는 새로운 아이디어에 열려 있습니다. 그 아이디어가 합리적이고 증거에 기반하는 한 말입니다. 본질적으로 회의적인 
                        건축가는 특히 엉뚱하거나 반대되는 관점에 끌립니다. 그리고 사실이 잘못된 것으로 판명되면 일반적으로 기꺼이 자신의 의견을 수정합니다.</p>   
                        <p><strong>&emsp;오리지널</strong> - 건축가가 없다면 세상은 훨씬 덜 흥미로운 곳이 될 것입니다. 이 성격 유형의 반항적 기질은 역사상 가장 파격적인 
                        아이디어와 발명품의 원인이 됩니다. 일상 생활에서도 건축가는 주변 사람들에게 사물을 보는 새로운(때로는 놀라운) 방식을 고려하도록 강요합니다.</p>   
                        
                    <h2>건축가(INTJ) 약점</h2>
                    <div className='imgDiv'></div>
                        <p><strong>&emsp;오만함</strong> – 건축가는 지식이 풍부할 수 있지만 오류가 없는 것은 아닙니다. 그들의 자기 확신은 다른 사람들, 특히 지적으로 열등하다고 생각하는 사람의 유용한 정보에 눈을 멀게 할 수 있습니다. 이러한 성격은 다른 사람들이 틀렸다는 것을 증명하려고 할 때 불필요하게 가혹하거나 편협한 것처럼 보일 수도 있습니다.</p>
                        <p><strong>&emsp;감정 거부</strong> 건축가에게 합리성은 왕입니다. 그러나 감정적 맥락은 종종 이러한 성격 유형을 가진 사람들이 인정하는 것보다 더 중요합니다. 건축가는 사실보다 감정을 중시하는 사람에게 조바심을 낼 수 있습니다. 불행히도 감정을 무시하는 것은 건축가의 판단을 흐리게 할 수 있는 일종의 편견입니다.</p>
                        <p><strong>&emsp;지나치게 비판적</strong> - 이러한 성격은 특히 생각과 감정에 있어서 자제력이 강한 경향이 있습니다. 자신의 삶의 사람들이 자신의 억제 수준에 맞추지 못할 때 건축가는 매우 비판적으로 보일 수 있습니다. 그러나 이러한 비판은 인간의 본성에 대한 완전한 이해라기보다는 자의적인 기준에 근거한 부당할 수 있다.</p>
                        <p><strong>&emsp;전투적</strong> - 건축가 는 이유를 이해하지 못한 채 맹목적으로 무엇이든 따르는 것을 싫어합니다. 여기에는 제한과 이를 부과하는 권위자가 포함됩니다. 이 성격 유형을 가진 사람들은 쓸모없는 규칙과 규정에 대해 논쟁을 벌일 수 있습니다. 그러나 때때로 이러한 싸움은 더 중요한 문제에서 주의를 산만하게 합니다.</p>   
                        <p><strong>&emsp;Socially Clueless</strong> - 건축가의 끊임없는 합리성은 사회 생활에서 좌절로 이어질 수 있습니다. 기대를 무시하려는 그들의 노력으로 인해 다른 사람들과 고립되거나 단절된 느낌이 들 수 있습니다. 때때로 그들은 관계 전체의 가치에 대해 냉소적이 되어 사랑과 연결의 중요성에 의문을 제기할 수 있습니다.</p>
                </div>
            </div>
            <div className='BtnComponent'>
            <div className='beforeBtn'>
                    <a href='/Introduce'>
                        <div className='title'>소개</div>
                        <div className='BtnCircle'>&#8592;</div>
                    </a>
                </div>
                <div className='nextBtn'>
                    <a href=''>
                        <div className='title'>강점과 약점</div>
                        <div className='BtnCircle'>&#8594;</div>
                    </a>
                </div>
                <div className='wrapper'>
                    <div className='social'>
                        <div className='social-count'>
                            <div id="snsCount" className='social-number'>{count}k</div>
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

export default StrengthsWeaknesses;