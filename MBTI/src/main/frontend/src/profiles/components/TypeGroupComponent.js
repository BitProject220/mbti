import React from 'react';
import '../css/typeGroup.css'

const TypeGroupComponent = (props) => {
    return (
        <div className='typeGroupComponent'>
            <a href={props.path}>
                <img  className='image'src={require(`../img/${props.no}.svg`) } alt={props.name}/>
            </a>
            <h4>{props.name}</h4>
            <h5>{props.mbti}</h5>
            <div>{props.content}</div>
        </div>
    );
};

export default TypeGroupComponent;