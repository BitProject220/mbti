import React from 'react';
import '../css/reset.css';
import '../css/test/result.css';

const svgstyle={
    width: '100%',
    height: '/100%',
    transform: 'translate3d(0px, 0px, 0px)',
    contentvisibility: 'visible',
}
const ResultPage = ({state}) => {
    console.log(state);
    return (
        <div className='resultBg'>
         <section className='test-results explorer'>
            <svg viewBox='0 0 1220 835' preserveAspectRatio='none' className='background'> 
                <polygon style={{fill:"rgb(241, 153, 4)",fillRule:"nonzero"}} points='1920,730 1067,835 0,753.3 0,458.1 377,393 778,495 1242,333 1920,0' className='c1'></polygon>
            </svg>
            <div className='type-info'>
                <div className='caption'>당신의 성격 유형은 :  </div>
                <div className='type-name'>장인</div>
                <div className='type-code'>ISTP-T</div>
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
                                    <div data-v-fcf8446e="" className="percentage">47%</div> 
                                    <div data-v-fcf8446e="" className="bar right-fill">
                                        <div data-v-fcf8446e="" className="filler" style={{width: "53%"}}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className="percentage right active">53%</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className="title left">외향형</div> 
                                    <div data-v-fcf8446e="" className="title right active">내향형</div>
                                </div>
                            </div>
                        </div>
                        <div className="trait energy">
                            <div className="caption">에너지</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className="percentage">42%</div>
                                    <div data-v-fcf8446e="" className="bar right-fill">
                                        <div data-v-fcf8446e="" className="filler" style={{width: "58%"}}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className="percentage right active">58%</div>
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
                                    <div data-v-fcf8446e="" className="percentage active">53%</div> 
                                    <div data-v-fcf8446e="" className="bar left-fill">
                                        <div data-v-fcf8446e="" className="filler" style={{width: "53%"}}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className="percentage right">47%</div>
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
                                    <div data-v-fcf8446e="" className="percentage">49%</div>
                                    <div data-v-fcf8446e="" className="bar right-fill">
                                        <div data-v-fcf8446e="" className="filler" style={{width: "51%"}}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className="percentage right active">51%</div>
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
                                    <div data-v-fcf8446e="" className="percentage">49%</div>
                                    <div data-v-fcf8446e="" className="bar right-fill">
                                        <div data-v-fcf8446e="" className="filler" style={{width: "51%"}}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className="percentage right active">51%</div>
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