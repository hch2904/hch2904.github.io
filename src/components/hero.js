import React from 'react';

import myImg from '../assets/images/my-hero-img.png';

import '../styles/components/hero.scss';

const Hero = () => {
  return (
    <div className="hero-wrap">
      <div className="_main-content-wrap">
        <div className="img-name-wrap">
          <img src={myImg} alt="" className="my-img-wrap"/>
          <div className='name-wrap'>
            <h1 className='fname'>Himanshu</h1>
            <h1 className='lname'>Chanan</h1>
            <hr className='fake-border' />
          </div>
        </div>
        <div className="my-info-wrap">
          <h1 className="role-name">
            Software Developer
          </h1>
          <h1 className='location-info-1'>Based Out of India</h1>
          <h1 className='location-info-2'>Something</h1>
          <p className='some-info-block'>some  more info , i do this and thata and this and that some more text etc and some more text some random qoute, in the end it’s not the years that count it’s the life in those years. </p>
          <p className='contact-email'>himanshu2904@outlok.com</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;