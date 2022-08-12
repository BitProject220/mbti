import React from 'react';
import { Link } from 'react-router-dom';
import '../css/typeGroup.css'

const TypeGroupComponent = (props) => {
    return (
        <div className='typeGroupComponent'>
            <Link to='/MBTIDetail'>
                {/* <img className='image' src={`img/${props.no}.svg`} alt={props.name} /> */}
                <img  className='image'src={require(`../img/${props.no}.svg`) } alt={props.name}/>
            </Link>
            <h4>{props.name}</h4>
            <h5>{props.mbti}</h5>
            <div>{props.content}</div>
        </div>
    );
};

export default TypeGroupComponent;