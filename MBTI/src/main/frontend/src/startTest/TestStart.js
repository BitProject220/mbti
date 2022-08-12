import React from 'react';
import '../css/reset.css';
import '../css/question/question.css';

const TestStart = () => {
    return (
        <div className='test-questions comp'>
        <div className='question'>
            <div className='statement'>
                <span id='stmt_hjz8r3gh45'>주기적으로 새로운 친구를 만든다.</span>
            </div>
            <div role='radiogroup' aria-labelledby='stmt_hjz8r3gh45' className='decision'>
                <div className='caption agree'>동의</div>
                <div className='options'>
                    <div role='radio' aria-label='agree-max' data-index='0' aria-checked='false' tabindex='-1' className='option agree max'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='agree-med' data-index='0' aria-checked='false' tabindex='-1' className='option agree med'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='agree-min' data-index='0' aria-checked='false' tabindex='-1' className='option agree min'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='neutral' data-index='0' aria-checked='false' tabindex='-1' className='option neutral'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-min' data-index='0' aria-checked='false' tabindex='-1' className='option disagree min'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-med' data-index='0' aria-checked='false' tabindex='-1' className='option disagree med'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-max' data-index='0' aria-checked='false' tabindex='-1' className='option disagree max'>
                        <span aria-hidden='ture' className='far fa-cheak'></span>
                    </div>
                </div>
                <div className='caption disagree'>비동의</div>
            </div>
        </div>
        </div>
    );
};

export default TestStart;