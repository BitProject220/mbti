import React from 'react';
import '../css/typeGroup.css'

const TypeGroupComponent = (props) => {
    return (
        <div className='typeGroupComponent'>
            <a href={props.detail.path}>
                <img  className='typeImage'src={require(`../img/${props.detail.imgNo}.png`) } alt={props.detail.typeName}/>
            </a>
            <h4>{props.detail.typeName}</h4>
            <h5>{props.detail.mbtiType}</h5>
            <div className='contentDiv'>{props.detail.content}</div>
        </div>
    );
};

export default TypeGroupComponent;