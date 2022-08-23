import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../main/Footer';
import Header from '../main/Header';
import ResultPage from './ResultPage';

const ResultMain = () => {
  const { state } = useLocation();
  console.log(state);
    return (
        <div className='Main'>
        <Header />
        
        <ResultPage state={state}/>
  
        <Footer />
      </div>
    );
};

export default ResultMain;