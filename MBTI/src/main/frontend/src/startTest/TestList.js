import React from 'react';


const TestList = ({item,mbti, answerClick}) => {

  return (
    <>
      <div className='test-questions comp'>
        <div className='question'>
            <div className='statement'>
                <span id='stmt_hjz8r3gh45'>{item}</span>
            </div>
            <div role='radiogroup' aria-labelledby='stmt_hjz8r3gh45' className='decision'>
                <div className='captionTest agree'>동의</div>
                <div className='options' onClick={answerClick} >
                    <div role='radio' aria-label='agree-max' data-index='-3' mbti={mbti} aria-checked='false' tabindex='-1' className='option agree max'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='agree-med' data-index='-2' mbti={mbti} aria-checked='false' tabindex='-1' className='option agree med'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='agree-min' data-index='-1' mbti={mbti} aria-checked='false' tabindex='-1' className='option agree min'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='neutral' data-index='0' mbti={mbti} aria-checked='false' tabindex='-1' className='option neutral'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-min' data-index='1' mbti={mbti} aria-checked='false' tabindex='-1' className='option disagree min'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-med' data-index='2' mbti={mbti} aria-checked='false' tabindex='-1' className='option disagree med'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                    <div role='radio' aria-label='disagree-max' data-index='3' mbti={mbti} aria-checked='false' tabindex='-1' className='option disagree max'>
                        <span aria-hidden='true' className='far fa-cheak'></span>
                    </div>
                </div>
                <div className='captionTest disagree'>비동의</div>
            </div>
        </div>
      </div>
    
    </>
  );
};

export default TestList;