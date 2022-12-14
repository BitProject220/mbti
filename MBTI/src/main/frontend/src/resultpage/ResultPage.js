import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/reset.css';
import '../css/test/result.css';
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
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

const svgstyle={
    width: '100%',
    height: '/100%',
    transform: 'translate3d(0px, 0px, 0px)',
    contentvisibility: 'visible',
}
const ResultPage = ({mbtiresult}) => {
    //console.log(mbtiresult[0]);
    
    const { mbti, ei, ns, jp, tf, at} = mbtiresult[0]
    

    const resultei = ei>50;
    const resultns = ns>50;
    const resulttf = tf>50;
    const resultjp = jp>50;
    const resultat = at>50;
    
    
    const color = document.getElementById('color');
    const color2 = document.getElementById('color2');
    const color3 = document.getElementById('color3');
    const color4 = document.getElementById('color4');
    const color5 = document.getElementById('color5');
    
    const result1 = document.getElementById('EiInput');
    const result2 = document.getElementById('NsInput');
    const result3 = document.getElementById('TfInput');
    const result4 = document.getElementById('JpInput');
    const result5 = document.getElementById('AtInput');

    


    /* .addClass('active'); */

    if(ei === true){
      
        result1.style.background= "#F5F5F5";
        color.style.background= "#2B9EB3";
    }else if(ei === false){
       
        result1.style.background= "#F5F5F5";
        color.style.background= "#2B9EB3";
    }

    if(ns === true){
        color2.style.background= "#F5F5F5";
        result2.style.background="#F19904"
    }else if(ns === false){
        color2.style.background= "#F5F5F5";
        result2.style.background= "#F19904";
    }

    if(tf=== true){
        color3.style.background= "#F5F5F5";
        result3.style.background= "#44AF69";
    }else if(tf === false){
        color3.style.background= "#F5F5F5";
        result3.style.background= "#44AF69";
    }

    if(jp=== true){
        color4.style.background= "#F5F5F5";
        result4.style.background= "#CF536D";
    }else if(jp === false){
        color4.style.background= "#F5F5F5";
        result4.style.background= "#CF536D";
    }

    if(at === true){
        color5.style.background= "#F5F5F5";
        result5.style.background= "#f84210";
    }else if(at === false){
        color5.style.background= "#F5F5F5";
        color5.style.background= "#f84210";
    }
    
   
    let job;
    let id;
    const back = document.getElementById("c1")
    const mbtiColor = document.getElementById("type-code")
    let pngNum;

    if(mbti === "ENTJ-A"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }else if(mbti === "ENTJ-T"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }
    if(mbti === "INTJ-A"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }else if(mbti === "INTJ-T"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }
    if(mbti === "INTP-A"){
        job = "????????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }else if(mbti === "INTP-T"){
        job = "????????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }
    if(mbti === "ENTP-A"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }else if(mbti === "ENTP-T"){
        job = "?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }
    
    if(mbti === "INFJ-A"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }else if(mbti === "INFJ-T"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }
    if(mbti === "INFP-A"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }else if(mbti === "INFP-T"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }
    if(mbti === "ENFJ-A"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }else if(mbti === "ENFJ-T"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }
    if(mbti === "ENFP-A"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }else if(mbti === "ENFP-T"){
        job = "?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }
    
    if(mbti === "ISTJ-A"){
        job = "???????????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }else if(mbti === "ISTJ-T"){
        job = "???????????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }
    if(mbti === "ISFJ-A"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }else if(mbti === "ISFJ-T"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }
    if(mbti === "ESTJ-A"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }else if(mbti === "ESTJ-T"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }
    if(mbti === "ESFJ-A"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }else if(mbti === "ESFJ-T"){
        job = "?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }
     
    if(mbti === "ISTP-A"){
        job = "??????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }else if(mbti === "ISTP-T"){
        job = "??????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }
    if(mbti === "ISFP-A"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }else if(mbti === "ISFP-T"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }
    if(mbti === "ESTP-A"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }else if(mbti === "ESTP-T"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }
    if(mbti === "ESFP-A"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }else if(mbti === "ESFP-T"){
        job = "?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }
/*     useEffect(() => {

        const qs = require('qs');
        console.log(mbtiresult.mbti)
            console.log(mbtiresult.ei)
            console.log(mbtiresult.ns)
            console.log(mbtiresult.tf)
            console.log(mbtiresult.jp)
            console.log(mbtiresult.at) 
  
        axios({
          method: 'POST',
          url: 'http://localhost:8080/user/userMbtiTypeResultCheck',
          data: qs.stringify({'mbti_email' : sessionStorage.getItem("email")})
          }).then((res)=>{
            console.log(mbtiresult.mbti)
            console.log(mbtiresult.ei)
            console.log(mbtiresult.ns)
            console.log(mbtiresult.tf)
            console.log(mbtiresult.jp)
            console.log(mbtiresult.at)  
            alert("??????!");
            console.log("????????? ??? ??????!")
              if(res.data === 'nonExist'){
                alert("????????? ???????????? ??????")
                axios({
                  method: 'POST',
                  url: 'http://localhost:8080/user/userMbtiTypeResult',
                  data: ({
                      'mbti_email' : sessionStorage.getItem("email"),
                      'mbti_type' : mbti,
                      'mbti_EI' : ei,
                      'mbti_NS' : ns,
                      'mbti_TF' : tf,
                      'mbti_JP' : jp,
                      'mbti_AT' : at
                    })
              }).then(()=>{
                console.log("?????? ?????? ??????!")
                
              }).catch(error =>{
                console.log(error)
              });
            }else if(res.data === 'exist'){
              alert("????????? ?????????")
               axios({
                method: 'POST',
                url: 'http://localhost:8080/user/userMbtiTypeResultUpdate',
                data: ({
                  'mbti_email' : sessionStorage.getItem("email"),
                  'mbti_type' : mbti,
                  'mbti_EI' : ei,
                  'mbti_NS' : ns,
                  'mbti_TF' : tf,
                  'mbti_JP' : jp,
                  'mbti_AT' : at
                })
              }).then(()=>{
                console.log(mbti+"232323222")
                console.log("?????? ?????? ??????!")
              }).catch(error =>{
                  console.log(error)
              }); 
    
              }
          }).catch(error =>{
            console.log(error)
          });

        },[]); */
    
      

    return (
        <div className='resultBg'>
            <svg viewBox='0 0 1220 835' preserveAspectRatio='none' className='background'> 
                <polygon style={{fill:"rgb(241, 153, 4)",fillRule:"nonzero"}} points='1920,730 1067,835 0,753.3 0,458.1 377,393 778,495 1242,333 1920,0' className='c1' id='c1'></polygon>
            </svg>
            <img src ={INTJPNG} alt='' className='INTJPNG' id='INTJPNG1' style={id === '1' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG2} alt='' className='INTJPNG' id='INTJPNG2' style={id === '2' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG3} alt='' className='INTJPNG' id='INTJPNG3' style={id === '3' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG4} alt='' className='INTJPNG' id='INTJPNG4' style={id === '4' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG5} alt='' className='INTJPNG' id='INTJPNG5' style={id === '5' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG6} alt='' className='INTJPNG' id='INTJPNG6' style={id === '6' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG7} alt='' className='INTJPNG' id='INTJPNG7' style={id === '7' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG8} alt='' className='INTJPNG' id='INTJPNG8' style={id === '8' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG9} alt='' className='INTJPNG' id='INTJPNG9' style={id === '9' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG10} alt='' className='INTJPNG' id='INTJPNG10' style={id === '10' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG11} alt='' className='INTJPNG' id='INTJPNG11' style={id === '11' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG12} alt='' className='INTJPNG' id='INTJPNG12' style={id === '12' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG13} alt='' className='INTJPNG' id='INTJPNG13' style={id === '13' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG14} alt='' className='INTJPNG' id='INTJPNG14' style={id === '14' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG15} alt='' className='INTJPNG' id='INTJPNG15' style={id === '15' ? { display:'block'} : {display:'none'}} />
            <img src ={INTJPNG16} alt='' className='INTJPNG' id='INTJPNG16' style={id === '16' ? { display:'block'} : {display:'none'}} />
         <section className='test-results explorer'>
            <div className='type-info'>
                <div className='caption'>????????? ?????? ????????? : { mbti } </div>
                <div className='type-name'>{job} </div>
                <div className='type-code' id='type-code' >{ mbti }</div>
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
                            <div className="caption">??????</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" id="Escore"className={resultei ? "percentage active" : "percentage"}>{ ei + '%'}</div> 
                                    <div data-v-fcf8446e="" id="EiInput" className={resultei ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color' className="filler" style={resultei ? {width: ei + "%" }:{width: 100 - ei + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" id="Iscore" className={resultei ? "percentage right" : "percentage right active"}>{ 100 - ei + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" id="Ename" className={resultei ? "title left active" : "title left"}>?????????</div> 
                                    <div data-v-fcf8446e="" id="Iname"className={resultei ? "title right" : "title right active"}>?????????</div>
                                </div>
                            </div>
                        </div>
                        <div className="trait energy">
                            <div className="caption">?????????</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className={resultns ? "percentage active" : "percentage"}>{ ns + '%'}</div>
                                    <div data-v-fcf8446e="" id="NsInput" className={resultns ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color2' className="filler" style={resultns ? {width: ns + "%" }:{width: 100 - ns + "%" }}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className={resultns ? "percentage right" : "percentage right active"}>{ 100 - ns + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className={resultns ? "title left active" : "title left"}>?????????</div>
                                    <div data-v-fcf8446e="" className={resultns ? "title right" : "title right active"}>???????????????</div>
                                </div>
                            </div>
                        </div> 
                        <div className="trait nature">
                            <div className="caption">??????</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className={resulttf ? "percentage active" : "percentage"}>{ tf + '%'}</div> 
                                    <div data-v-fcf8446e="" id="TfInput"className={resulttf ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color3' className="filler" style={resulttf ? {width: tf + "%" }:{width: 100 - tf + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className={resulttf ? "percentage right" : "percentage right active"}>{ 100 - tf + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className={resulttf ? "title left active" : "title left"}>?????????</div>
                                    <div data-v-fcf8446e="" className={resulttf ? "title right" : "title right active"}>?????????</div>
                                </div>
                            </div>
                        </div>

                        <div className="trait tactics">
                            <div className="caption">??????</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className={resultjp ? "percentage active" : "percentage"}>{ jp + '%'}</div>
                                    <div data-v-fcf8446e="" id="JpInput" className={resultjp ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color4' className="filler" style={resultjp ? {width: jp + "%" }:{width: 100 - jp + "%" }}></div>
                                    </div> 
                                    <div data-v-fcf8446e="" className={resultjp ? "percentage right" : "percentage right active"}>{ 100 - jp + '%'}</div>
                                </div> 
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className={resultjp ? "title left active" : "title left"}>?????????</div>
                                    <div data-v-fcf8446e="" className={resultjp ? "title right" : "title right active"}>?????????</div>
                                </div>
                            </div>
                        </div>

                        <div className="trait identity">
                            <div className="caption">??????</div>
                            <div data-v-fcf8446e="" className="pb-wrp">
                                <div data-v-fcf8446e="" className="bar-wrapper">
                                    <div data-v-fcf8446e="" className={resultat ? "percentage active" : "percentage"}>{ at + '%'}</div>
                                    <div data-v-fcf8446e="" id="AtInput" className={resultat ? "bar left-fill" : "bar right-fill"}>
                                        <div data-v-fcf8446e="" id='color5' className="filler" style={resultat ? {width: at + "%" }:{width: 100 - at + "%" }}></div>
                                    </div>
                                    <div data-v-fcf8446e="" className={resultat ? "percentage right" : "percentage right active"}>{ 100 - at + '%'}</div>
                                </div>
                                <div data-v-fcf8446e="" className="trait-titles">
                                    <div data-v-fcf8446e="" className={resultat ? "title left active" : "title left"}>?????????</div>
                                    <div data-v-fcf8446e="" className={resultat ? "title right" : "title right active"}>?????????</div>
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