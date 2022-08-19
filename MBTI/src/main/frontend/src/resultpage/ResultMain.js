import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import ResultPage from './ResultPage';

const ResultMain = () => {
    return (
        <div className='Main'>
        <Header />
        
        <ResultPage/>
  
        <Footer />
      </div>
    );
};

export default ResultMain;