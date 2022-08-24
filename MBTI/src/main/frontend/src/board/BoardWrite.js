import React from 'react';
import './css/boardWrite.css';
import '../css/reset.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const BoardWrite = () => {
    return (
        <div className='BoardWrite'>
            <div className='BoardWriteContent'>
                <div className='BoardWriteArea'>
                    <div className='BoardWriteEditor'>
                        <div className='BoardWriteSubject'>
                            <label className='writeSubject'>
                                <span className='field-subject'>제목</span>
                                <span className='star'>*</span>
                            </label>
                            <div className='attr-subject'>
                                <input type='text' className='subject-text'></input>  
                            </div>

                            
                        </div> 

                        <div className='BoardEditor'>
                        <CKEditor
                                editor={ ClassicEditor }
                                config={{
                                    placeholder: "내용을 입력하세요",
                                }}
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                            
                        </div> 

                        
                    </div>
                </div>
                <button className="boardWriteListBtn">목록</button>
                <button className="boardWriteSaveBtn">저장</button>
            </div>

            
            
        </div>
    );
};

export default BoardWrite;