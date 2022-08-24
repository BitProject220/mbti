import React from 'react';

const svgstyle={
    width: '100%',
    height: '/100%',
    transform: 'translate3d(0px, 0px, 0px)',
    contentvisibility: 'visible'
}
const ResultPage = () => {
    return (
        <>
         <section className='test-results explorer'>
            <svg viewBox='0 0 1920 835' preserveAspectRatio='none' className='background'>
                <polygon points='1920,730 1067,835 0,753.3 0,458.1 377,393 778,495 1242,333 1920,0' className='c1'></polygon>
            </svg>
            <div className='type-info'>
                <div className='caption'>당신의 성격 유형은 :</div>
                <div className='type-name'>장인</div>
                <div className='type-code'>ISTP-T</div>
                <div id='anim_qne7xxs5qo' className='image' data-chunk='animation-chunk'>
                    <div className='image animated'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' width='400' height='400' preserveAspectRatio='xMidYMid meet' style={svgstyle}>
                            <defs>
                                <clipPath id='__lottie_element_2'>
                                    <rect width='400' height='400' x='0' y='0'></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
};

export default ResultPage;