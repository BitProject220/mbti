import React from 'react';
import Footer from '../main/Footer';
import Header from '../main/Header';
import TestHeader from './TestHeader';
import TestItem from './TestItem';

const Test = () => {
  return (
    <div className='Main'>
      <Header />
      
      <TestHeader />

      <TestItem />

      <Footer />
    </div>
  );
};

export default Test;