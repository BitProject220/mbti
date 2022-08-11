import React from 'react';
import TypeGroupComponent from './TypeGroupComponent';

function TypeGroup(props) {
    
    return (
        <div>
            <h2>{props.type}</h2>
            <div className='types'>
                <TypeGroupComponent
                    name='전략가'
                    mbti='INTJ-A / INTJ-T'
                    content='모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가입니다.'
                    no='1'
                    path='#'
                    />
                <TypeGroupComponent 
                    name='논리술사'
                    mbti='INTP-A / INTP-T'
                    content='지식을 끝없이 갈망하는 혁신적인 발명가입니다.'
                    no='2'
                    path='#'
                    />
                <TypeGroupComponent 
                    name='통솔자'
                    mbti='ENTJ-A / ENTJ-T'
                    content='항상 문제 해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자입니다.'
                    no='3'
                    path='#'
                    />
                <TypeGroupComponent 
                    name='변론가'
                    mbti='ENTP-A / ENTP-T'
                    content='지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.'
                    no='4'
                    path='#'
                    />
            </div>
    </div>
    );
}

export default TypeGroup;