import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../css/reset.css';
import '../css/question/question.css';
import $ from 'jquery';
import data from './TestData';
import TestList from './TestList';
import TestResult from '../test/TestResult';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TestProcress from './TestProcress';
import { parse } from '@fortawesome/fontawesome-svg-core';




const TestStart = () => {
    console.log('렌더링함');
    
    const [page, setPage] = useState(0);
    const [list, setList] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [result, setResult] = useState([]);
    //const [mymbti, setMymbti] = useState('')
    

    const navigate = useNavigate();
    
    const nextButton = () => {
        //console.log('다음페이지');
        const checkResult = $('.option.active').each(function(){
            const mbti = this.attributes.getNamedItem('mbti');
            const dataIndex = this.attributes.getNamedItem('data-index');
            

            result.push({mbti : mbti.value , dataIndex :dataIndex.value});
            
        });
        //console.log(result);
        
       setPage(page + 1);
       setAnswer([...answer, result])

            if(page === 9) {
                let ei = 0;
                let ns = 0;
                let jp = 0;
                let tf = 0;
                let at = 0;
            
                

                //console.log(result);
                result.map((item) =>{
                    //console.log(item.mbti + '....' + item.dataIndex);
                    
                     switch(item.mbti){
                        case 'EI' : return (ei += parseInt(item.dataIndex));
                        case 'NS' : return (ns += parseInt(item.dataIndex));
                        case 'JP' : return (jp += parseInt(item.dataIndex));
                        case 'TF' : return (tf += parseInt(item.dataIndex));
                        case 'AT' : return (at += parseInt(item.dataIndex));
                        default :  return 0;
                    }
                    
                });
                console.log(ei);
                console.log(ns);
                console.log(jp);
                console.log(tf);
                console.log(at);
                
               
                
                
                /* 
                { ei > 0 ? mymbti + 'E': mymbti + 'I'}
                { ns > 0 ? mymbti + 'N': mymbti + 'S'}
                { jp > 0 ? mymbti + 'J': mymbti + 'P'}
                { tf > 0 ? mymbti + 'T': mymbti + 'F'}
                { at > 0 ? mymbti + '-A' : mymbti +'-T'}
                 */

                
                /*                 
                  ei > 0 ? mymbti.concat('E')  : mymbti.concat('I')
                  ns > 0 ? mymbti.concat('N') : mymbti.concat('S')
                  jp > 0 ? mymbti.concat('J') : mymbti.concat('P')
                  tf > 0 ? mymbti.concat('T') : mymbti.concat('F')
                  at > 0 ? mymbti.concat('-A') : mymbti.concat('-T')
                 */
                


                //alert(mymbti);
                //console.log(mymbti);
                
                

                navigate('/resultmain', {state : {result : result, ei : ei, ns : ns, tf : tf, jp : jp, at :at,}});
            }
       

       
    }
  
    const data1 = useMemo(() => {
        return setList(data.filter(item => parseInt((item.id-1) / 6) === page))
    } , [page])
    
    //const test = list.map(item => item.id ,'1');
    //console.log(test);
    
    useEffect(() => {
        //window.scrollTo(0, 0);
 

    }, [page]);

    const answerClick = (e) => {
       
        if(e.target.className.search('options') === -1) {

            if(e.target.className.search('active') ===  -1){
                $(e.target).parent().children().addClass(' active');
                $(e.target).parent().children().not(e.target).removeClass(' active');
                $(e.target).parent().children().attr('tabindex', 0);
                $(e.target).parent().children().not(e.target).attr('tabindex', -1);
                $(e.target).closest('.question').addClass(' inactive');
                //console.log($(e.target).parent().children('div').hasClass('active'));
        
            
            }

            
        }
        
        //console.log(e.target.className);
    }

    return (
        <>
        {/*     
        <TestProcress />
        {list.map((item) => page <10 ? <TestList key={item.id} item={item.title} mbti={item.mbti} answerClick={answerClick} /> : <TestResult result={result} />  )}
        */}         
        {list.map((item) => <TestList key={item.id} item={item.title} mbti={item.mbti} answerClick={answerClick} />)}
        
        

        <div className='action-row'>

            <button type='button' onClick={ nextButton } className='sp-action sp-button button--action button--purple button--lg button--pill button--fixed button--icon-rt'>

                <span className='button__text'>다음</span>
                <span><FontAwesomeIcon icon={faArrowRight} className='ArrowRightBtn'/></span>
                    <title id='i_wluntfkkmr'>Go</title>
                    <path data-v-5c0ea640="" d="M23.296875,3.421875 L22.63125,4.0875 C22.190625,4.528125 22.190625,5.240625 22.63125,5.68125 L39.365625,22.40625 L4.125,22.40625 C3.50625,22.40625 3,22.9125 3,23.53125 L3,24.46875 C3,25.0875 3.50625,25.59375 4.125,25.59375 L39.365625,25.59375 L22.63125,42.328125 C22.190625,42.76875 22.190625,43.48125 22.63125,43.921875 L23.296875,44.5875 C23.7375,45.028125 24.45,45.028125 24.890625,44.5875 L44.68125,24.796875 C45.121875,24.35625 45.121875,23.64375 44.68125,23.203125 L24.890625,3.421875 C24.440625,2.98125 23.7375,2.98125 23.296875,3.421875 Z"></path>
               
            </button>
        </div>
        </>
    );
};

export default TestStart;