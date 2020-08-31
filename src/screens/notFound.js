import React from 'react';
import Footer from '../components/footer';
import NavigationBar from '../components/navbar';

const NotFound = () => {
  return (<>
    <NavigationBar />
    <div className='not-found-wrap'>
      <h3 className='page-header'>You Seem Lost!</h3>
      <h3 className='component-header'>Click here to go back home</h3>
    </div>
    <Footer />
  </>
  );
};

export default NotFound;