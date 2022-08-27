import React, { useState } from 'react';
import '../css/reset.css';
import '../css/test/result.css';

const svgstyle={
    width: '100%',
    height: '/100%',
    transform: 'translate3d(0px, 0px, 0px)',
    contentvisibility: 'visible',
}
const ResultPage = ({mbtiresult}) => {
    //console.log(mbtiresult[0]);
    
    const { mbti, ei, ns, jp, tf, at} = mbtiresult[0]
    //console.log(mbti);
    // ei = e 
    // i = 100=ei 
    const [resultei, setresultei] = useState(true);
    const [resultns, setresultns] = useState(true);
    const [resulttf, setresulttf] = useState(true);
    const [resultjp, setresultjp] = useState(true);
    const [resultat, setresultat] = useState(true);
    const [EIscore, setEscore] = useState(true);
    
    
    const result1 = document.getElementById('EiInput');
    const color = document.getElementById('color');

    const result2 = document.getElementById('NsInput');
    const result3 = document.getElementById('TfInput');
    const result4 = document.getElementById('JpInput');
    const result5 = document.getElementById('AtInput');
    

    const Escore = document.getElementById('Escore');
    const Iscore = document.getElementById('Iscore');
    
    
    console.log(ei);
    if(ei>50){
        resultei ? result1.style.background= "#F5F5F5" : result1.style.background= "#F5F5F5";
        color.style.background= "#2B9EB3";

    }


    

    if(ns>50){
    }
    if(tf>50){
        resultei ? result3.style.background= "#44AF69" : result3.style.background= "#F5F5F5";
    }
    if(jp>50){
        resultei ? result4.style.background= "#CF536D" : result4.style.background= "#F5F5F5";
    }
    if(at>50){
        resultei ? result5.style.background= "#f84210" : result5.style.background= "#F5F5F5";
    }


    return (
        <div className='resultBg'>
         <section className='test-results explorer'>
            <svg viewBox='0 0 1220 835' preserveAspectRatio='none' className='background'> 
                <polygon style={{fill:"rgb(241, 153, 4)",fillRule:"nonzero"}} points='1920,730 1067,835 0,753.3 0,458.1 377,393 778,495 1242,333 1920,0' className='c1'></polygon>
            </svg>
            <div className='type-info'>
                <div className='caption'>당신의 성격 유형은 : { mbti } </div>
                <div className='type-name'>장인</div>
                <div className='type-code'>{ mbti }</div>
                <div id='anim_qne7xxs5qo' className='image' data-chunk='animation-chunk'>
                    <div className='image animated'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400ait-scales 400' width='400' height='400' preserveAspectRatio='xMidYMid meet' style={svgstyle}>
                            <defs>
                                <clipPath id='__lottie_element_2'>
                                    <rect width='400' height='400' x='0' y='0'></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='resultChartForm'>
                <div data-chunk="ui-chunk" className="trait-scales comp resultChart">
                    <div className='resultChartContent'>
                        <div className="trait mind">
                            <div className="caption">정신</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" id="Escore"className="percentage">{ ei + '%'}</div> 
                                    <div data-v-fcf8446e="" id="EiInput" className={resultei ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color' className="filler" style={{width: 100 - ei + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" id="Iscore" className="percentage right active">{ 100 - ei + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" id="Ename"className="title left">외향형</div> 
                                    <div data-v-fcf8446e="" id="Iname"className="title right active">내향형</div>
                                </div>
                            </div>
                        </div>
                        <div className="trait energy">
                            <div className="caption">에너지</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className="percentage">{ ns + '%'}</div>
                                    <div data-v-fcf8446e="" id="NsInput" className={resultns ? "bar right-fill" : "bar left-fill"}>
                                        <div data-v-fcf8446e="" className="filler" style={{width: 100 - ns + "%" }}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className="percentage right active">{ 100 - ns + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className="title left">직관형</div>
                                    <div data-v-fcf8446e="" className="title right active">현실주의형</div>
                                </div>
                            </div>
                        </div> 
                        <div className="trait nature">
                            <div className="caption">본성</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className="percentage active">{ tf + '%'}</div> 
                                    <div data-v-fcf8446e="" id="TfInput"className={resulttf ? "bar right-fill" : "bar left-fill"}>
                                        <div data-v-fcf8446e="" className="filler" style={{width: 100 - tf + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className="percentage right">{ 100 - tf + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className="title left active">사고형</div>
                                    <div data-v-fcf8446e="" className="title right">감정형</div>
                                </div>
                            </div>
                        </div>

                        <div className="trait tactics">
                            <div className="caption">전술</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className="percentage">{ jp + '%'}</div>
                                    <div data-v-fcf8446e="" id="JpInput" className={resultjp ? "bar right-fill" : "bar left-fill"}>
                                        <div data-v-fcf8446e="" className="filler" style={{width: 100 - jp + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className="percentage right active">{ 100 - jp + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className="title left">계획형</div>
                                    <div data-v-fcf8446e="" className="title right active">탐색형</div>
                                </div>
                            </div>
                        </div>

                        <div className="trait identity">
                            <div className="caption">자아</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className="percentage">{ at + '%'}</div>
                                    <div data-v-fcf8446e="" id="AtInput" className={resultat ? "bar right-fill" : "bar left-fill"}>
                                        <div data-v-fcf8446e="" className="filler" style={{width: 100 - at + "%" }}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className="percentage right active">{ 100 - at + '%'}</div>
                                </div>
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className="title left">확신형</div>
                                    <div data-v-fcf8446e="" className="title right active">민감형</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

        </div>
    );
};

export default ResultPage;