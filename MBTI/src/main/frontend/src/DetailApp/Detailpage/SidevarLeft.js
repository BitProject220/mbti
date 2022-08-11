import React from 'react';
import sidevarData from './sidevarData';

const SidevarLeft = () => {
    return (
        <>
            <div className='sidediv-left' style={{
                height :  'auto' ,
                width: 16+'%',
                float: 'left',
                color: 'black',
                }}>
                <h2>인적성 보고서</h2>
                <ul>
                {
                    sidevarData.map(item => <li key={ item.className }>
                        <a href={`${item.className}`}>
                            <h3>{ item.name }</h3>
                            
                        </a>
                    </li>)
                }
            </ul>
            </div>
        </>
    );
};

export default SidevarLeft;
