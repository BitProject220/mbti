import React, { useEffect, useState } from 'react';
import myPageTolp2 from '../img/myPage/myPageTolp3.png';
import { useNavigate } from 'react-router';
import '../css/myPage/myesult.css';
import axios from 'axios';
import INTJPNG from '../profiles/img/1.png';
import INTJPNG2 from '../profiles/img/2.png';
import INTJPNG3 from '../profiles/img/3.png';
import INTJPNG4 from '../profiles/img/4.png';
import INTJPNG5 from '../profiles/img/5.png';
import INTJPNG6 from '../profiles/img/6.png';
import INTJPNG7 from '../profiles/img/7.png';
import INTJPNG8 from '../profiles/img/8.png';
import INTJPNG9 from '../profiles/img/9.png';
import INTJPNG10 from '../profiles/img/10.png';
import INTJPNG11 from '../profiles/img/11.png';
import INTJPNG12 from '../profiles/img/12.png';
import INTJPNG13 from '../profiles/img/13.png';
import INTJPNG14 from '../profiles/img/14.png';
import INTJPNG15 from '../profiles/img/15.png';
import INTJPNG16 from '../profiles/img/16.png';

const MymbtiResult = () => {
    const [mbtiType,setMbtiType] = useState('');
    const [mbtiEI,setMbtiEI] = useState('');
    const [mbtiNS,setMbtiNS] = useState('');
    const [mbtiTF,setMbtiTF] = useState('');
    const [mbtiJP,setMbtiJP] = useState('');
    const [mbtiAT,setMbtiAT] = useState('');
    
    useEffect(() => {
    const qs = require('qs');

        axios({
            method: 'POST',
            url: 'http://localhost:8080/user/userInfoMain',
            data: qs.stringify({'mbti_email' : sessionStorage.getItem("email")})
        }).then((res)=>{
            console.log("안녕")
            console.log(sessionStorage.getItem("email"))
            setMbtiType(res.data.mbti_type) 
            setMbtiEI(res.data.mbti_EI) 
            setMbtiNS(res.data.mbti_NS)
            setMbtiTF(res.data.mbti_TF) 
            setMbtiJP(res.data.mbti_JP)
            setMbtiAT(res.data.mbti_AT)
            /* setMbti(res.data.mbti_type)*/
            /* setMbti_email(sessionStorage.getItem("email")) 
            setMbti(res.data.mbti_type)  */

        }).catch(error =>{
            console.log(error)
        });
    }, []); 

    let job;
    let id;
    const back = document.getElementById("c2")
    const mbtiColor = document.getElementById("mbtiTypeText")

    if(mbtiType === "ENTJ-A"){
        job = "대담한 통솔자";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }else if(mbtiType === "ENTJ-T"){
        job = "대담한 통솔자";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }
    if(mbtiType === "INTJ-A"){
        job = "용의주도한 전략가";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }else if(mbtiType === "INTJ-T"){
        job = "용의주도한 전략가";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }
    if(mbtiType === "INTP-A"){
        job = "논리적인 논리술사";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }else if(mbtiType === "INTP-T"){
        job = "논리적인 논리술사";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }
    if(mbtiType === "ENTP-A"){
        job = "뜨거운 논쟁을 즐기는 변론가";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }else if(mbtiType === "ENTP-T"){
        job = "뜨거운 논쟁을 즐기는 변론가";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }
    
    if(mbtiType === "INFJ-A"){
        job = "선의의 옹호자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }else if(mbtiType === "INFJ-T"){
        job = "선의의 옹호자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }
    if(mbtiType === "INFP-A"){
        job = "열정적인 중재자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }else if(mbtiType === "INFP-T"){
        job = "열정적인 중재자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }
    if(mbtiType === "ENFJ-A"){
        job = "정의로운 선도자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }else if(mbtiType === "ENFJ-T"){
        job = "정의로운 선도자";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }
    if(mbtiType === "ENFP-A"){
        job = "재기발랄한 활동가";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }else if(mbtiType === "ENFP-T"){
        job = "재기발랄한 활동가";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }
    
    if(mbtiType === "ISTJ-A"){
        job = "청렴결백한 현실주의자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }else if(mbtiType === "ISTJ-T"){
        job = "청렴결백한 현실주의자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }
    if(mbtiType === "ISFJ-A"){
        job = "용감한 수호자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }else if(mbtiType === "ISFJ-T"){
        job = "용감한 수호자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }
    if(mbtiType === "ESTJ-A"){
        job = "엄격한 경영자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }else if(mbtiType === "ESTJ-T"){
        job = "엄격한 경영자";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }
    if(mbtiType === "ESFJ-A"){
        job = "사교적인 집정관";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }else if(mbtiType === "ESFJ-T"){
        job = "사교적인 집정관";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }
     
    if(mbtiType === "ISTP-A"){
        job = "만능 장인";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }else if(mbtiType === "ISTP-T"){
        job = "만능 장인";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }
    if(mbtiType === "ISFP-A"){
        job = "호기심 많은 모험가";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }else if(mbtiType === "ISFP-T"){
        job = "호기심 많은 모험가";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }
    if(mbtiType === "ESTP-A"){
        job = "모험을 즐기는 사업가";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }else if(mbtiType === "ESTP-T"){
        job = "모험을 즐기는 사업가";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }
    if(mbtiType === "ESFP-A"){
        job = "자유로운 영혼의 연예인";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }else if(mbtiType === "ESFP-T"){
        job = "자유로운 영혼의 연예인";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }

    const navigate = useNavigate();
    const dtailPage = () => {
        navigate("/detail");
    }
    console.log(mbtiEI,
    mbtiNS,
    mbtiTF,
    mbtiJP,
    mbtiAT)

    
    return (
        <div className='MyResult' style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 600px'}}>
            <div className='MyResultContent'>
               
                <div className='resultTitle'>
                    <h1>성격유형검사 결과</h1>
                </div>
                <div className='resultSubContent'>
                    <p>당신의 성격 테스트 결과를 검토하고 당신의 성격 유형과 핵심 특징에 대해 더 알아보세요.</p>
                </div>

                <div className="card__body">
                        <svg viewBox='0 400 1220 835' preserveAspectRatio='none' className='cardBackground'> 
                            <polygon style={{fill:"rgb(68, 175, 105)",fillRule:"nonzero"}} points='1920,800 500,835 0,753.5 0,0 10000,393 778,495 1242,333 1920,0' className='c2' id='c2'></polygon>
                        </svg> 
                    <div className="card__text">
                        <header data-v-0046f2b4="" className="card__header">
                            <h3 data-v-0046f2b4="" className="card__title">당신의 성격 유형은?</h3> 
                            <h4 data-v-0046f2b4="" className="card__subtitle">
                                <span className="type__full">{job}</span><br />
                                <span className="type__code">({mbtiType})</span>
                            </h4>
                        </header>
                        <img src ={INTJPNG} alt='' className='INTJPNG1-1' id='INTJPNG1' style={id === '1' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG2} alt='' className='INTJPNG1-1' id='INTJPNG2' style={id === '2' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG3} alt='' className='INTJPNG1-1' id='INTJPNG3' style={id === '3' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG4} alt='' className='INTJPNG1-1' id='INTJPNG4' style={id === '4' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG5} alt='' className='INTJPNG1-1' id='INTJPNG5' style={id === '5' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG6} alt='' className='INTJPNG1-1' id='INTJPNG6' style={id === '6' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG7} alt='' className='INTJPNG1-1' id='INTJPNG7' style={id === '7' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG8} alt='' className='INTJPNG1-1' id='INTJPNG8' style={id === '8' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG9} alt='' className='INTJPNG1-1' id='INTJPNG9' style={id === '9' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG10} alt='' className='INTJPNG1-1' id='INTJPNG10' style={id === '10' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG11} alt='' className='INTJPNG1-1' id='INTJPNG11' style={id === '11' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG12} alt='' className='INTJPNG1-1' id='INTJPNG12' style={id === '12' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG13} alt='' className='INTJPNG1-1' id='INTJPNG13' style={id === '13' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG14} alt='' className='INTJPNG1-1' id='INTJPNG14' style={id === '14' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG15} alt='' className='INTJPNG1-1' id='INTJPNG15' style={id === '15' ? { display:'block'} : {display:'none'}} />
                        <img src ={INTJPNG16} alt='' className='INTJPNG1-1' id='INTJPNG16' style={id === '16' ? { display:'block'} : {display:'none'}} />  
                        <p className='mbtiContent'>
                            {id === '1' ? "용의주도한 전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다." : null}
                            {id === '2' ? "논리적인 논리술사는 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다. " : null}
                            {id === '3' ? "대담한 통솔자는 타고난 지도자라고 할 수 있습니다. 이들은 카리스마와 자신감을 지니고 있으며 자신의 권한을 이용해 사람들이 공통된 목표를 위해 함께 노력하도록 이끕니다. " : null}
                            {id === '4' ? "뜨거운 논쟁을 즐기는 변론가는 두뇌 회전이 빠르고 대담한 성격으로 현재 상황에 이의를 제기하는 데 거리낌이 없습니다. 변론가는 어떤 의견이나 사람에 반대하는 일을 두려워하지 않으며, 논란이 될 만한 주제에 대해 격렬하게 논쟁하는 일을 즐깁니다." : null}
                            {id === '5' ? "선의의 옹호자는 매우 희귀한 성격임에도 불구하고 세상에 큰 영향력을 발휘하곤 합니다. 이들은 이상주의적이고 원칙주의적인 성격으로, 삶에 순응하는 대신 삶에 맞서 변화를 만들어 내고자 합니다. " : null}
                            {id === '6' ? "열정적인 중재자는 언뜻 보기에 조용하고 자신을 내세우지 않는 것처럼 보이지만, 사실은 에너지와 열정이 넘치는 마음을 지닌 성격입니다. 이들은 창의적이고 상상력이 뛰어나며 몽상을 즐기는 성격으로, 머릿속에서 수많은 이야기를 만들어 내곤 합니다." : null}
                            {id === '7' ? "정의로운 선도자는 삶에서 위대한 사명을 위해 힘써야 한다는 느낌을 받곤 합니다. 사려 깊고 이상주의적 성향을 지닌 선도자는 다른 사람과 주변 세상에 긍정적인 영향력을 발휘하기 위해 최선을 다하며, 어려운 상황에서도 올바른 일을 할 기회를 마다하지 않습니다." : null}
                            {id === '8' ? "재기발랄한 활동가는 진정으로 자유로운 영혼이라고 할 수 있으며 외향적이고 솔직하며 개방적인 성격입니다. 이들은 활기차고 낙관적인 태도로 삶을 대하며 다른 사람들 사이에서 돋보이곤 합니다." : null}
                            {id === '9' ? "청렴결백한 현실주의자는 진실하게 행동하는 자신의 모습에서 자부심을 느끼며, 자기 생각을 솔직하게 이야기하고 어떤 것에 헌신하기로 한 경우 최선을 다합니다." : null}
                            {id === '10' ? "용감한 수호자는 겸손한 자세로 세상을 지탱하는 역할을 합니다. 이들은 근면하고 헌신적인 성격으로 주변 사람들에 대한 깊은 책임감을 느낍니다." : null}
                            {id === '11' ? "엄격한 경영자는 전통과 질서를 중시하는 성격으로, 자신이 생각하는 옳고 그름과 사회적 기준에 따라 가족과 공동체가 화합할 수 있도록 노력합니다." : null}
                            {id === '12' ? "사교적인 집정관에게 인생이란 남과 함께 나눌 때 가장 즐거운 것입니다. 이들은 여러 사람을 하나로 모으는 역할을 하며 솔직하고 개방적인 태도로 친구와 연인과 이웃을 대합니다." : null}
                            {id === '13' ? "만능 장인은 이성과 호기심을 통해 세상을 바라보며 눈과 손으로 직접 탐구하는 일을 즐깁니다. 이들은 타고난 손기술을 지니고 있으며, 다양한 프로젝트에서 유용하고 재미있는 물건을 만들어 내고 주변 환경에서 배울 점을 찾습니다." : null}
                            {id === '14' ? "호기심 많은 모험가는 진정한 의미의 예술가라고 할 수 있습니다. 하지만 모험가라고 반드시 예술 업계에만 종사하는 것은 아닙니다. 이들에게는 삶 자체가 자신을 표현하기 위한 캔버스이기 때문입니다. 이들은 입는 옷부터 여가 시간을 보내는 방식까지 다양한 측면에서 자신의 독특한 개성을 생생히 드러냅니다." : null}
                            {id === '15' ? "모험을 즐기는 사업가는 항상 주변 사람에게 영향력을 행사하곤 합니다. 파티에서 가는 곳마다 사람들에게 둘러싸여 있는 사람을 발견한다면 아마 사업가일 것입니다. 이들은 직설적인 유머 감각을 지니고 있으며 수많은 사람의 관심을 받는 일을 즐깁니다." : null}
                            {id === '16' ? "자유로운 영혼의 연예인은 즉흥적으로 노래하고 춤을 추는 일을 즐기는 성격입니다. 이들은 지금 이 순간을 즐기며 남들도 자신과 같은 즐거움을 느낄 수 있기를 바랍니다. 또한 남을 응원하는 데 기꺼이 시간과 에너지를 투자하며, 매우 매력적인 방식으로 다른 사람의 기운을 북돋곤 합니다." : null}
                        </p>
                    </div>
                    <div className="card__actions" style={{display:'none'}}>
                        <button id='moreBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ dtailPage }>
                                <span className='moreButtonText'>더보기</span>
                        </button>
                    </div>
                </div>

                <div className='mbtiTypeText' id="mbtiTypeText">
                    {mbtiType}
                </div>

                <div className='card-graph'>
                    <div className='mind'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Mind</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiEI} > '50' ? "외향성" : "내향성"}</span>
                                </h4>
                            </header>
                            <div className='circlePer'>
                                <svg data-v-d970a024="" viewBox="0 0 36 36">
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="1" strokeLinecap="round" strokeDasharray="100, 100" className="pct__whole">
                                    </path> 
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2B9EB3" strokeWidth="1" strokeLinecap="round" strokeDasharray= {mbtiEI > '50' ? `${mbtiEI} 100` : `${100-mbtiEI} 100`}  className="pct__percent"></path>
                                </svg>
                                <div className='perText'>{mbtiEI > '50' ? mbtiEI : 100-mbtiEI}%</div>
                            </div>
                            <p className='card-graph_Content'>
                                {{mbtiEI} > 50 ? "당신은 대부분 외향적이에요. 여러분은 아마도 사회적 상호작용에 의해 힘을 얻고 여러분의 열정과 흥분을 공개적으로 표현하는 경향이 있습니다." : "당신은 대부분 내성적이에요. 당신은 적지만 깊고 의미 있는 사회적 상호 작용을 선호하고 더 차분한 환경에 끌릴 것입니다."}
                                
                            </p>
                        </div>  
                    </div>
                    <div className='energy'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Energy</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiNS} > '50' ? "직관형" : "현실주의형"}</span>
                                </h4>
                            </header>
                            <div className='circlePer'>
                                <svg data-v-d970a024="" viewBox="0 0 36 36">
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="1" strokeLinecap="round" strokeDasharray="100, 100" className="pct__whole">
                                    </path> 
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F19904" strokeWidth="1" strokeLinecap="round" strokeDasharray={mbtiNS > '50' ? `${mbtiNS} 100` : `${100-mbtiNS} 100`} className="pct__percent"></path>
                                </svg>
                                <div className='perText'>{mbtiNS > '50' ? mbtiNS : 100-mbtiNS}%</div>
                            </div>
                            <p className='card-graph_Content'>
                            {{mbtiNS} > '50' ? "당신은 대부분 직관적이에요. 당신은 매우 상상력이 풍부하고 개방적이며 숨겨진 의미와 먼 가능성에 초점을 맞출 것입니다." : "당신은 대부분 관찰력이 좋군요. 당신은 실제로 일어나고 있거나 일어날 가능성이 매우 높은 것에 집중하며 실용적이고 현실적일 가능성이 높습니다."}
                             
                            </p>
                        </div> 
                    </div>
                    <div className='nature'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Nature</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiTF} > '50' ? "사고형" : "감정형"}</span>
                                </h4>
                            </header>
                            <div className='circlePer'>
                                <svg data-v-d970a024="" viewBox="0 0 36 36">
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="1" strokeLinecap="round" strokeDasharray="100, 100" className="pct__whole">
                                    </path> 
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#44AF69" strokeWidth="1" strokeLinecap="round" strokeDasharray={mbtiTF > '50' ? `${mbtiTF} 100` : `${100-mbtiTF} 100`} className="pct__percent"></path>
                                </svg>
                                <div className='perText'>{mbtiTF > '50' ? mbtiTF : 100-mbtiTF}%</div>
                            </div>
                            <p className='card-graph_Content'>
                            {{mbtiTF} > 50 ? "당신은 대부분 이성적입니다. 당신은 객관성과 합리성에 초점을 맞추고 사회적 조화보다 효율성을 우선시할 것입니다." : "당신은 대부분 감정적입니다. 당신은 가치 정서적인 표현이나 감수성, 공감, 사회적 화합, 그리고 협력에 우선 순위를 매길 가능성이 높습니다."}
                                
                            </p>
                        </div> 

                    </div>
                    <div className='tatics'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Tatics</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiJP} > '50' ? "계획형" : "탐색형"}</span>
                                </h4>
                            </header>
                            <div className='circlePer'>
                                <svg data-v-d970a024="" viewBox="0 0 36 36">
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="1" strokeLinecap="round" strokeDasharray="100, 100" className="pct__whole">
                                    </path> 
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#CF536D" strokeWidth="1" strokeLinecap="round" strokeDasharray={mbtiJP > '50' ? `${mbtiJP} 100` : `${100-mbtiJP} 100`} className="pct__percent"></path>
                                </svg>
                                <div className='perText'>{mbtiJP > '50' ? mbtiJP : 100-mbtiJP}%</div>
                            </div>
                            <p className='card-graph_Content'>
                            {{mbtiJP} > 50 ? "당신은 대부분 계획을 하고 있습니다. 당신은 결단력 있고 철저하며 조직적일 가능성이 높습니다. 당신은 명료성을 중요시하고 자발성보다 계획을 선호합니다." : "당신은 대부분 탐색을 하고 있습니다. 당신은 즉흥적이고 적응하는 데 매우 능숙할 것입니다. 그리고 유연하고 안정성보다 새로움을 중시하는 경향이 있습니다."}
                            </p>
                        </div> 
                    </div>
                    <div className='identity'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Identity</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiAT} > '50' ? "자기주장형" : "신중형"}</span>
                                </h4>
                            </header>
                            <div className='circlePer'>
                                <svg data-v-d970a024="" viewBox="0 0 36 36">
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="1" strokeLinecap="round" strokeDasharray="100, 100" className="pct__whole">
                                    </path> 
                                    <path data-v-d970a024="" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f84210" strokeWidth="1" strokeLinecap="round" strokeDasharray={mbtiAT > '50' ? `${mbtiAT} 100` : `${100-mbtiAT} 100`} className="pct__percent"></path>
                                </svg>
                                <div className='perText'>{mbtiAT > '50' ? mbtiAT : 100-mbtiAT}%</div>
                            </div>
                            <p className='card-graph_Content'>
                            {{mbtiJP} > 50 ? "당신은 대부분 자기주장이 강합니다. 당신은 자신감이 넘치고, 침착하며, 스트레스에 강하고, 너무 많은 걱정을 하지 않을 것입니다." : "당신은 대부분 신중합니다. 당신은 자의식이 강하고 스트레스에 민감하고 성공 중심적이며 완벽주의적이며 개선을 열망합니다."}
                            
                            </p>
                        </div> 
                    </div>
                </div>
            
            </div>
        
        </div>
    );
};

export default MymbtiResult;