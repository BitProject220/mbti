import React from 'react';
import Header from '../main/Header';
import Footer from '../main/Footer';
import Content from './components/Content'
import TypeGroup from './components/TypeGroup';

const Profiles = () => {
    return (
        <div>
            <Header />
            <div>
                {
                    // map 데이터 가져오기 
                    Content.map((item, index) => {
                        return <TypeGroup 
                            type = {item.type}
                            typename = {item.typename}
                            typeMbti={item.typeMbti}
                            substance={item.substance}
                            imgNo={item.imgNo}
                            path={item.path}
                        />
                    })
                }
            </div>
            <Footer />
        </div>
    );
};

export default Profiles;