import React, { useState } from 'react';
import axios from 'axios';

const BoardSearching = (props) => {
    //input text placeholder
    
    //sort
    // const holdText = (e) => {
    //     setInputText(e.target.value);
    // };

    //선택한 카테고리 저장
    const [categoryOption, setCategoryOption] = useState('');
    const setCategory =(e) =>{
        setCategoryOption(e.target.value)
    };
    
    //검색내용 저장
    const [inputText, setInputText] = useState('');
    const onChange = (e) => {
        setInputText(e.target.value);
      };

    //search
    const setSearchCondition= (e) => {
        e.preventDefault();
        props.getCategory(categoryOption);
        props.getSearchKeyword(inputText);
    
    }

    return (
        <div className="kboard-search">
        <form id="kboard-search-form-1" method="get">
            <input type="hidden" name="mod" value="list" />
            <input type="hidden" name="pageid" value="1" />			
            <select className="kboard_list_sort" onChange={setCategory}>
                {props.searchBy.map((item)=>(
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
            </select>
            <input type="text" name="keyword" onChange={onChange} value={inputText} placeholder={inputText}/>
            <button type="submit" className="kboard-default-button-small" onClick={setSearchCondition}>검색</button>
        </form>
    </div>
    );
};

export default BoardSearching;