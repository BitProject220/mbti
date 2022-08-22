import React from 'react';
import Data from '../components/data';
import '../css/typeGroup.css'
import TypeGroupComponent from './TypeGroupComponent';

function TypeGroup() {
    console.log(Data);
    return (
        <div className='profilesMain'>
            {Data.TypeGroup.map(group => (
                <>
                <div className='typeGroupDiv' key={group.id}>
                    <h2>{group.groupName}</h2>
                    <div className='typeDetail'>
                    {group.typeDetail.map(detail=>(
                        // <div key={detail.mbtiType} className='typeGroupComponent'>
                        //     <a href={detail.path}>
                        //         <img className='image' src={require(`../img/${detail.imgNo}.svg`)} alt={detail.typeName} />
                        //     </a>
                        //     <h4>{detail.typeName}</h4>
                        //     <h5>{detail.mbtiType}</h5>
                        //     <div>{detail.content}</div>
                        // </div>
                        <TypeGroupComponent key={detail.id} detail={detail} />
                    ))
                    }
                    </div>
                </div>
                </> 
            ))}
        </div>
    );
}

export default TypeGroup;