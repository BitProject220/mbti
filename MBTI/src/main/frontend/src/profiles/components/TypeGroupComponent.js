import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/typeGroup.css'

const TypeGroupComponent = (props) => {
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(`/${props.detail.path}`, {
            state: {
                id: props.detail.id}});
                console.log("props" + props.detail.id);
    }
    
    return (
        <div className='typeGroupComponent' onClick={onNavigate} key={props.detail.id}>
            <div className='typeGroupComponent' >
                    <img  className='typeImage'src={require(`../img/${props.detail.imgNo}.png`) } alt={props.detail.typeName}/>
                <h4>{props.detail.typeName}</h4>
                <h5>{props.detail.mbtiType}</h5>
                <div className='contentDiv'>{props.detail.content}</div>
            </div>
        </div>
    );
};
 
export default TypeGroupComponent;