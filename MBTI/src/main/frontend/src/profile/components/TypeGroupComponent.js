import React from 'react';
import '../css/typeGroup.css';

const TypeGroupComponent = (props) => {
    return (
        <div className='typeGroupComponent'>
            <a href={props.path}>
                {/* <img className='image' src={`img/${props.no}.svg`} alt={props.name} /> */}
                <img  className='image'src={require(`../img/${props.imgNo}.svg`) } alt={props.typename}/>
            </a>
            <h4>{props.typename}</h4>
            <h5>{props.typeMbti}</h5>
            <div>{props.substance}</div>
        </div>
    );
};

export default TypeGroupComponent;