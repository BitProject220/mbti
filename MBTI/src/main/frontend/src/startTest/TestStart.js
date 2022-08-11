import React from 'react';
import '../css/reset.css';
import '../css/question/question.css';

const TestStart = () => {
    return (
        <>
        <div className='question'>
            <div className='statment'>
                <span id='stmt_hjz8r3gh45'>주기적으로 새로운 친구를 만든다.</span>
            </div>
            <div role='radiogroup' aria-labelledby='stmt_hjz8r3gh45' className='decision'>
                <div className='caption agree'>동의</div>
                <div className='option'>
                    <div role='radio' aria-label='agree-max' data-index='0' aria-checked='false' tabindex='-1' className='option agree max'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                </div>
                <div className='caption disagree'>비동의</div>
            </div>
        </div>
        </>
    );
};

export default TestStart;