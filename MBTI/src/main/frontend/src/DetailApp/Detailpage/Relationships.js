import React from 'react';
import {  useParams } from 'react-router-dom';
import relationshipsdata from '../db/relationshipsdata';
import img from '../../image/facebook.png';

const Relationships = ({ id }) => {

    const data = relationshipsdata.find(data => data.id === id)
    
    return (
        <>
           
            <div className='main_description' >
                    <h1 >{data.title}</h1>
                    <div className='Greatperson'>
                        <p>{data.Greatperson}</p>
                        <footer>{data.footer}</footer>
                    </div>
                    <p >{data.description}</p>
                    <h2 >{data.Characteristic1}</h2>
                        <p>{data.Chdescriptsion1_1}</p>
                        <p>{data.Chdescriptsion1_2}</p>
                    <div className="description-pullout">
                        {data.typetext1}
                    </div>
                        <p>{data.Chdescriptsion1_3}</p>
                        <p>{data.Chdescriptsion1_4}</p>
                    <h2>{data.Characteristic2}</h2>
                        <p>{data.Chdescriptsion2_1}</p>
                        <p>{data.Chdescriptsion2_2}</p>
                    <div className="description-pullout">
                       {data.typetext2}
                    </div>
                        <p>{data.Chdescriptsion2_3}</p>
                    <h2>{data.Characteristic3}</h2>
                        <p>{data.Chdescriptsion3_1}</p>
                        <p>{data.Chdescriptsion3_2}</p>
                    <div className="description-pullout">
                        {data.typetext3}
                    </div>
                        <p>{data.Chdescriptsion3_3}</p>
                    <h2>{data.Characteristic4}</h2>
                        <p>{data.Chdescriptsion4_1}</p>
                        <p>{data.Chdescriptsion4_2}</p>
                    </div>
        </>
    );
};

export default Relationships;