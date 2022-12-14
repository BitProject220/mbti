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
        job = "????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }else if(mbtiType === "ENTJ-T"){
        job = "????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='3'
    }
    if(mbtiType === "INTJ-A"){
        job = "??????????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }else if(mbtiType === "INTJ-T"){
        job = "??????????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='1'
    }
    if(mbtiType === "INTP-A"){
        job = "???????????? ????????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }else if(mbtiType === "INTP-T"){
        job = "???????????? ????????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='2'
    }
    if(mbtiType === "ENTP-A"){
        job = "????????? ????????? ????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }else if(mbtiType === "ENTP-T"){
        job = "????????? ????????? ????????? ?????????";
        back.style.fill = "rgb(207, 83, 109)"
        mbtiColor.style.color = "#CF536D"
        id='4'
    }
    
    if(mbtiType === "INFJ-A"){
        job = "????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }else if(mbtiType === "INFJ-T"){
        job = "????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='5'
    }
    if(mbtiType === "INFP-A"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }else if(mbtiType === "INFP-T"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='6'
    }
    if(mbtiType === "ENFJ-A"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }else if(mbtiType === "ENFJ-T"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='7'
    }
    if(mbtiType === "ENFP-A"){
        job = "??????????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }else if(mbtiType === "ENFP-T"){
        job = "??????????????? ?????????";
        back.style.fill = "rgb(68, 175, 105)"
        mbtiColor.style.color = "#44AF69"
        id='8'
    }
    
    if(mbtiType === "ISTJ-A"){
        job = "??????????????? ???????????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }else if(mbtiType === "ISTJ-T"){
        job = "??????????????? ???????????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='9'
    }
    if(mbtiType === "ISFJ-A"){
        job = "????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }else if(mbtiType === "ISFJ-T"){
        job = "????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='10'
    }
    if(mbtiType === "ESTJ-A"){
        job = "????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }else if(mbtiType === "ESTJ-T"){
        job = "????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='11'
    }
    if(mbtiType === "ESFJ-A"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }else if(mbtiType === "ESFJ-T"){
        job = "???????????? ?????????";
        back.style.fill = "rgb(43, 158, 179)"
        mbtiColor.style.color = "#2B9EB3"
        id='12'
    }
     
    if(mbtiType === "ISTP-A"){
        job = "?????? ??????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }else if(mbtiType === "ISTP-T"){
        job = "?????? ??????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='13'
    }
    if(mbtiType === "ISFP-A"){
        job = "????????? ?????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }else if(mbtiType === "ISFP-T"){
        job = "????????? ?????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='14'
    }
    if(mbtiType === "ESTP-A"){
        job = "????????? ????????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }else if(mbtiType === "ESTP-T"){
        job = "????????? ????????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='15'
    }
    if(mbtiType === "ESFP-A"){
        job = "???????????? ????????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }else if(mbtiType === "ESFP-T"){
        job = "???????????? ????????? ?????????";
        back.style.fill = "rgb(241, 153, 4)"
        mbtiColor.style.color = "#F19904"
        id='16'
    }

    const navigate = useNavigate();
    const dtailPage = () => {
        navigate("/detail");
    }
 

    
    return (
        <div className='MyResult' style={{backgroundImage:`url(${ myPageTolp2 })`, backgroundRepeat:'no-repeat', backgroundPosition: '0% 0%', backgroundSize:'100% 600px'}}>
            <div className='MyResultContent'>
               
                <div className='resultTitle'>
                    <h1>?????????????????? ??????</h1>
                </div>
                <div className='resultSubContent'>
                    <p>????????? ?????? ????????? ????????? ???????????? ????????? ?????? ????????? ?????? ????????? ?????? ??? ???????????????.</p>
                </div>

                <div className="card__body">
                        <svg viewBox='0 400 1220 835' preserveAspectRatio='none' className='cardBackground'> 
                            <polygon style={{fill:"rgb(68, 175, 105)",fillRule:"nonzero"}} points='1920,800 500,835 0,753.5 0,0 10000,393 778,495 1242,333 1920,0' className='c2' id='c2'></polygon>
                        </svg> 
                    <div className="card__text">
                        <header data-v-0046f2b4="" className="card__header">
                            <h3 data-v-0046f2b4="" className="card__title">????????? ?????? ??????????</h3> 
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
                            {id === '1' ? "??????????????? ???????????? ????????????????????? ?????? ????????? ?????? ????????????, ????????? ????????? ?????? ????????? ????????????????????? ???????????? ????????? ????????? ?????? ????????? ????????????." : null}
                            {id === '2' ? "???????????? ??????????????? ????????? ????????? ????????? ?????? ????????? ????????? ???????????? ?????????, ????????? ??????????????? ?????? ?????? ???????????? ?????????. " : null}
                            {id === '3' ? "????????? ???????????? ????????? ??????????????? ??? ??? ????????????. ????????? ??????????????? ???????????? ????????? ????????? ????????? ????????? ????????? ???????????? ????????? ????????? ?????? ?????? ??????????????? ????????????. " : null}
                            {id === '4' ? "????????? ????????? ????????? ???????????? ?????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????? ???????????? ??? ???????????? ????????????. ???????????? ?????? ???????????? ????????? ???????????? ?????? ??????????????? ?????????, ????????? ??? ?????? ????????? ?????? ???????????? ???????????? ?????? ????????????." : null}
                            {id === '5' ? "????????? ???????????? ?????? ????????? ??????????????? ???????????? ????????? ??? ???????????? ???????????? ?????????. ????????? ????????????????????? ?????????????????? ????????????, ?????? ???????????? ?????? ?????? ?????? ????????? ????????? ????????? ?????????. " : null}
                            {id === '6' ? "???????????? ???????????? ?????? ????????? ???????????? ????????? ???????????? ?????? ????????? ????????????, ????????? ???????????? ????????? ????????? ????????? ?????? ???????????????. ????????? ??????????????? ???????????? ???????????? ????????? ????????? ????????????, ??????????????? ????????? ???????????? ????????? ?????? ?????????." : null}
                            {id === '7' ? "???????????? ???????????? ????????? ????????? ????????? ?????? ????????? ????????? ????????? ?????? ?????????. ?????? ?????? ??????????????? ????????? ?????? ???????????? ?????? ????????? ?????? ????????? ???????????? ???????????? ???????????? ?????? ????????? ?????????, ????????? ??????????????? ????????? ?????? ??? ????????? ???????????? ????????????." : null}
                            {id === '8' ? "??????????????? ???????????? ???????????? ???????????? ??????????????? ??? ??? ????????? ??????????????? ???????????? ???????????? ???????????????. ????????? ???????????? ???????????? ????????? ?????? ????????? ?????? ????????? ???????????? ???????????? ?????????." : null}
                            {id === '9' ? "??????????????? ?????????????????? ???????????? ???????????? ????????? ???????????? ???????????? ?????????, ?????? ????????? ???????????? ??????????????? ?????? ?????? ??????????????? ??? ?????? ????????? ????????????." : null}
                            {id === '10' ? "????????? ???????????? ????????? ????????? ????????? ???????????? ????????? ?????????. ????????? ???????????? ???????????? ???????????? ?????? ???????????? ?????? ?????? ???????????? ????????????." : null}
                            {id === '11' ? "????????? ???????????? ????????? ????????? ???????????? ????????????, ????????? ???????????? ?????? ????????? ????????? ????????? ?????? ????????? ???????????? ????????? ??? ????????? ???????????????." : null}
                            {id === '12' ? "???????????? ??????????????? ???????????? ?????? ?????? ?????? ??? ?????? ????????? ????????????. ????????? ?????? ????????? ????????? ????????? ????????? ?????? ???????????? ???????????? ????????? ????????? ????????? ????????? ????????????." : null}
                            {id === '13' ? "?????? ????????? ????????? ???????????? ?????? ????????? ???????????? ?????? ????????? ?????? ???????????? ?????? ????????????. ????????? ????????? ???????????? ????????? ?????????, ????????? ?????????????????? ???????????? ???????????? ????????? ????????? ?????? ?????? ???????????? ?????? ?????? ????????????." : null}
                            {id === '14' ? "????????? ?????? ???????????? ????????? ????????? ??????????????? ??? ??? ????????????. ????????? ??????????????? ????????? ?????? ???????????? ???????????? ?????? ????????????. ??????????????? ??? ????????? ????????? ???????????? ?????? ??????????????? ???????????????. ????????? ?????? ????????? ?????? ????????? ????????? ???????????? ????????? ???????????? ????????? ????????? ????????? ????????? ???????????????." : null}
                            {id === '15' ? "????????? ????????? ???????????? ?????? ?????? ???????????? ???????????? ???????????? ?????????. ???????????? ?????? ????????? ??????????????? ???????????? ?????? ????????? ??????????????? ?????? ???????????? ????????????. ????????? ???????????? ?????? ????????? ????????? ????????? ????????? ????????? ????????? ?????? ?????? ????????????." : null}
                            {id === '16' ? "???????????? ????????? ???????????? ??????????????? ???????????? ?????? ?????? ?????? ????????? ???????????????. ????????? ?????? ??? ????????? ????????? ????????? ????????? ?????? ???????????? ?????? ??? ????????? ????????????. ?????? ?????? ???????????? ??? ????????? ????????? ???????????? ????????????, ?????? ???????????? ???????????? ?????? ????????? ????????? ????????? ?????????." : null}
                        </p>
                    </div>
                    <div className="card__actions" style={{display:'none'}}>
                        <button id='moreBtn' type='button' className="sp-action sp-button button--action button--purple button--lg button--pill button--auto button--icon-rt" onClick={ dtailPage }>
                                <span className='moreButtonText'>?????????</span>
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
                                    <span className="type__full">{{mbtiEI} > '50' ? "?????????" : "?????????"}</span>
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
                                {{mbtiEI} > 50 ? "????????? ????????? ??????????????????. ???????????? ????????? ????????? ??????????????? ?????? ?????? ?????? ???????????? ????????? ????????? ??????????????? ???????????? ????????? ????????????." : "????????? ????????? ??????????????????. ????????? ????????? ?????? ?????? ?????? ????????? ?????? ????????? ???????????? ??? ????????? ????????? ?????? ????????????."}
                                
                            </p>
                        </div>  
                    </div>
                    <div className='energy'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Energy</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiNS} > '50' ? "?????????" : "???????????????"}</span>
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
                            {{mbtiNS} > '50' ? "????????? ????????? ??????????????????. ????????? ?????? ???????????? ???????????? ??????????????? ????????? ????????? ??? ???????????? ????????? ?????? ????????????." : "????????? ????????? ???????????? ?????????. ????????? ????????? ???????????? ????????? ????????? ???????????? ?????? ?????? ?????? ???????????? ??????????????? ???????????? ???????????? ????????????."}
                             
                            </p>
                        </div> 
                    </div>
                    <div className='nature'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Nature</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiTF} > '50' ? "?????????" : "?????????"}</span>
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
                            {{mbtiTF} > 50 ? "????????? ????????? ??????????????????. ????????? ???????????? ???????????? ????????? ????????? ????????? ???????????? ???????????? ???????????? ????????????." : "????????? ????????? ??????????????????. ????????? ?????? ???????????? ???????????? ?????????, ??????, ????????? ??????, ????????? ????????? ?????? ????????? ?????? ???????????? ????????????."}
                                
                            </p>
                        </div> 

                    </div>
                    <div className='tatics'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Tatics</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiJP} > '50' ? "?????????" : "?????????"}</span>
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
                            {{mbtiJP} > 50 ? "????????? ????????? ????????? ?????? ????????????. ????????? ????????? ?????? ???????????? ???????????? ???????????? ????????????. ????????? ???????????? ??????????????? ??????????????? ????????? ???????????????." : "????????? ????????? ????????? ?????? ????????????. ????????? ??????????????? ???????????? ??? ?????? ????????? ????????????. ????????? ???????????? ??????????????? ???????????? ???????????? ????????? ????????????."}
                            </p>
                        </div> 
                    </div>
                    <div className='identity'>
                        <div className="card__text">
                            <header data-v-0046f2b4="" className="card-graph_header">
                                <h3 data-v-0046f2b4="" className="card-graph_title">Identity</h3> 
                                <h4 data-v-0046f2b4="" className="card-graph_subtitle">
                                    <span className="type__full">{{mbtiAT} > '50' ? "???????????????" : "?????????"}</span>
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
                            {{mbtiJP} > 50 ? "????????? ????????? ??????????????? ????????????. ????????? ???????????? ?????????, ????????????, ??????????????? ?????????, ?????? ?????? ????????? ?????? ?????? ????????????." : "????????? ????????? ???????????????. ????????? ???????????? ????????? ??????????????? ???????????? ?????? ??????????????? ????????????????????? ????????? ???????????????."}
                            
                            </p>
                        </div> 
                    </div>
                </div>
            
            </div>
        
        </div>
    );
};

export default MymbtiResult;