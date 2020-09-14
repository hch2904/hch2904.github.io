import React from 'react';

import '../styles/components/whatIdo.scss';
import Icons from '../assets/svgs/icons';

const WhatIdo = () => {
  return (
    <div className='about-me-wrap'>
      <div className="section-heading">
        <h3 className="__heading">What I Do?</h3>
        <span className='__fake-border'/>
      </div>
      <div className="main-content-wrap">
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.FE_CODE}
          </div>
          <div className="heading-wrap">
            <h2>Frontend</h2>
          </div>
          <p className='info-text'>I am profficient in front-end technologies like React. Using reactjs I have developed many performant apps for web.</p>
        </div>
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.BACKEND}
          </div>
          <div className="heading-wrap">
            <h2>Backend</h2>
          </div>
          <p className="info-text">Working on microservice architecture has helped me strengthen my skills as a backend developer</p>
        </div>
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.MOBILE_APP}
          </div>
          <div className="heading-wrap">
            <h2>Mobile App</h2>
          </div>
          <p className="info-text">Although a newbie, in mobile development, I have overall understanding in cross platform app development frameworks such as React Native and Flutter.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;