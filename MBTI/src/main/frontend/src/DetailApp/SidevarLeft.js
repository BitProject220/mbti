import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import introduciondata from './db/introduciondata';
import Introduction from './Detailpage/Introduction';

const SidevarLeft = ({ id }) => {
    
    const navigate = useNavigate();

    const onIntrodusion = (e) =>{
        
        navigate("/Mbtiintrodusion", { state: { id: id  }});
                console.log(id);
                
    }
    const onSW = (e) =>{
        console.log(id);
        navigate("/MbtiSW", { state: { id: id  }});
                
    }
    const onRelationships = (e) =>{
        console.log(id);
        navigate("/MbtiRelationships", { state: { id: id  }});
                
    }
    const onFriendship = (e) =>{
        console.log(id);
        navigate("/Mbtifriendship", { state: { id: id  }});
                
    }
    const onParenthoo = (e) =>{
        console.log(id);
        navigate("/Mbtiparenthood", { state: { id: id  }});
                
    }
    const onCareerpaths = (e) =>{
        console.log(id);
        navigate("/Mbticareerpaths", { state: { id: id  }});
                
    }
    const onWorkplacehabits = (e) =>{
        console.log(id);
        navigate("/Mbtiworkplacehabits", { state: { id: id  }});
                
    }
    const onConclusion = (e) =>{
        console.log(id);
        navigate("/Mbticonclusion", { state: { id: id  }});                
    }
    
    return (
        <>
            <div className='sidediv-left'>
                    <h2>인적성 보고서</h2>
                    <ul>
                    <li onClick={onIntrodusion } id={id}>소개</li>
                    <li onClick={onSW} id={id}>강점과 약점</li>
                    <li onClick={onRelationships} id={id}>이성을 대할 때</li>
                    <li onClick={onFriendship} id={id}>친구를 대할 때</li>
                    <li onClick={onParenthoo} id={id}>자녀를 대할 때</li>
                    <li onClick={onCareerpaths} id={id}>직장에서 보이는 모습</li>
                    <li onClick={onWorkplacehabits} id={id}>직장에서 보이는 습관</li>
                    <li onClick={onConclusion} id={id}>결론</li>
                    </ul>
                </div>
        </>
    );
};

export default SidevarLeft;