import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import TestHeader from './TestHeader';
import StartTest from '../startTest/TestStart'


const Test = () => {
  return (
    <div className='Main'>
      <Header />
      
      <TestHeader />

      <StartTest />

      <Footer />
    </div>
  );
};

export default Test;