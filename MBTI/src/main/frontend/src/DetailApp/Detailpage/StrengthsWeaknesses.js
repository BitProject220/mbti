import React, { useState } from 'react';
import strongweakdata from '../db/strongweakdata';

    

const StrengthsWeaknesses = ({ id }) => {

    const data = strongweakdata.find(data => data.id === id)

    return (
        <>
             <div className='main_description'>
                <h1>{data.h1}</h1>
                <h2>{data.titles}</h2>
                    <p><strong>{data.strongtitle1}</strong>{data.strongsubject1}</p>
                    <p><strong>{data.strongtitle2}</strong>{data.strongsubject2}</p>
                    <p><strong>{data.strongtitle3}</strong>{data.strongsubject3}</p>
                    <p><strong>{data.strongtitle4}</strong>{data.strongsubject4}</p>   
                    <p><strong>{data.strongtitle5}</strong>{data.strongsubject5}</p>   
                    <p><strong>{data.strongtitle5}</strong>{data.strongsubject6}</p>   
                    
                <h2>{data.titlew}</h2>
                    <p><strong>{data.Weaknessestitle1}</strong>{data.Weaknessessubject1}</p>
                    <p><strong>{data.Weaknessestitle2}</strong>{data.Weaknessessubject2}</p>
                    <p><strong>{data.Weaknessestitle3}</strong>{data.Weaknessessubject3}</p>
                    <p><strong>{data.Weaknessestitle4}</strong>{data.Weaknessessubject4}</p>
                    <p><strong>{data.Weaknessestitle5}</strong>{data.Weaknessessubject5}</p>
                    <p><strong>{data.Weaknessestitle6}</strong>{data.Weaknessessubject6}</p>

            </div>
        </>
    );
};

export default StrengthsWeaknesses;