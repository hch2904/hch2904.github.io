import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';

import notFoundImg from '../assets/images/not-found.png';
import '../styles/screens/notFound.scss';


const NotFound = () => {
  return (<>
    <div className='generic-960-wrap not-found-wrap'>
      <div className='img-wrap'>
        <img src={notFoundImg} />
      </div>
      <h3 className='page-header'>You Seem Lost!</h3>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h3 className='component-header'>Click here to go back home</h3>
      </Link>
    </div>
    <Footer />
  </>
  );
};

export default NotFound;