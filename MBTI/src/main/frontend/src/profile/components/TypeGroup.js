import React from 'react';
import Content from './Content';
import TypeGroupComponent from './TypeGroupComponent';

const TypeGroup = (props) => {
    return (
        <div>
            <h2>{props.category}</h2>
            <div className='types'>
                {
                    Content.map((item, index) => {
                        return <TypeGroupComponent 
                            typename = {item.typename}
                            typeMbti={item.typeMbti}
                            substance={item.substance}
                            imgNo={item.imgNo}
                            path={item.path}
                        />
                    })
                }
                
            </div>
        </div>
    );
};

export default TypeGroup;