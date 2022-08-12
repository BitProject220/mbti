import React from 'react';
import { Link } from 'react-router-dom';
import '../css/typeGroup.css';

const TypeGroupComponent = (props) => {
    return (
        <div className='typeGroupComponent'>
            <Link to='/MBTIDetail'>
                <img  className='image'src={require(`../img/${props.no}.svg`) } alt={props.name}/>
            </Link>
            <h4>{props.name}</h4>
            <h5>{props.mbti}</h5>
            <div>{props.content}</div>
                <img  className='image'src={require(`../img/${props.imgNo}.svg`) } alt={props.typename}/>
            
            <h4>{props.typename}</h4>
            <h5>{props.typeMbti}</h5>
            <div>{props.substance}</div>
        </div>
    );
};

export default TypeGroupComponent;