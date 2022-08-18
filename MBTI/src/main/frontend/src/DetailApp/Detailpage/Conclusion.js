import React from 'react';
import conclusion from '../db/conclusion';

const Conclusion = ({id}) => {
    const data= conclusion.find(data => data.id === id)

    return (
        <div className='main_description' dangerouslySetInnerHTML={{ __html: data.body }} style={{ width: 51+'%', float: 'left',}}>
            
        </div>
    );
};

export default Conclusion;