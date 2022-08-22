import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../css/reset.css';
import '../css/question/question.css';
import $ from 'jquery';
import data from './TestData';
import TestList from './TestList';
import TestResult from '../test/TestResult';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';



const TestStart = () => {

    
    const [page, setPage] = useState(0);
    const [list, setList] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [result, setResult] = useState([]);
    const navigate = useNavigate();
    
    const nextButton = () => {
        if(page == 9) {
            //alert(result);
            //console.log(result);
            return navigate('/resultmain', {state: result});
        }
        //const result =[]
        /* 
        console.log($('.option.active').attr('data-index'));
        console.log($('.option.active').attr('tabindex'));
        console.log($('.option .active'));
        
        const score = $('.option.active').map(function() {
            return $(this).attr('data-index');
            //return setAnswer(...answer,$(this).attr('data-index'));
        })
        .get()   // 반환된 값을 배열로 반환된다.
        const mbtiType = $('.option.active').map(function() {
            return $(this).attr('mbti');
            //return setAnswer(...answer,$(this).attr('data-index'));
        })
        .get()
        //.join(", "); // 배열의 모든 요소를 쉼표(,)로 구분하여 문자열로 반환된다.
        */
        
 
        
        const checkResult = $('.option.active').each(function(){
            const mbti = this.attributes.getNamedItem('mbti');
            const dataIndex = this.attributes.getNamedItem('data-index');
            

            result.push({mbti : mbti.value , dataIndex :dataIndex.value});
            
            
        });
        //console.log(result);
        

       setPage(page + 1);
       setAnswer([...answer, result])
       
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
        {list.map((item) => page <10 ? <TestList key={item.id} item={item.title} mbti={item.mbti} answerClick={answerClick} /> : <TestResult result={result} />  )}
        */}         
        {list.map((item) => <TestList key={item.id} item={item.title} mbti={item.mbti} answerClick={answerClick} />)}
        
        

        <div className='action-row'>
            <button type='button' onClick={ nextButton } className='sp-action sp-button button--action button--purple button--lg button--pill button--fixed button--icon-rt'>
                <span className='button__text'>다음</span>
                <span className='sp-icon icon--inherit icon--rotatable icon--dir-rt icon--arrow'>
                <svg xmlns='http://www.w3.org/2000/svg' role='img' viewBox='0 0 48 48' aria-labelledby='i_wluntfkkmr'>
                    <title id='i_wluntfkkmr'>Go</title>
                    <path data-v-5c0ea640="" d="M23.296875,3.421875 L22.63125,4.0875 C22.190625,4.528125 22.190625,5.240625 22.63125,5.68125 L39.365625,22.40625 L4.125,22.40625 C3.50625,22.40625 3,22.9125 3,23.53125 L3,24.46875 C3,25.0875 3.50625,25.59375 4.125,25.59375 L39.365625,25.59375 L22.63125,42.328125 C22.190625,42.76875 22.190625,43.48125 22.63125,43.921875 L23.296875,44.5875 C23.7375,45.028125 24.45,45.028125 24.890625,44.5875 L44.68125,24.796875 C45.121875,24.35625 45.121875,23.64375 44.68125,23.203125 L24.890625,3.421875 C24.440625,2.98125 23.7375,2.98125 23.296875,3.421875 Z"></path>
                </svg>
                </span>
            </button>
        </div>
        </>
    );
};

export default TestStart;