import React from 'react';

import '../styles/components/whatIdo.scss';
import Icons from '../assets/svgs/icons';

const WhatIdo = () => {
  return (
    <div className='about-me-wrap'>
      <div className="section-heading">
        <h3 className="__heading">What I Do?</h3>
      </div>
      <div className="main-content-wrap">
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.FE_CODE}
          </div>
          <div className="heading-wrap">
            <h2>Frontend</h2>
          </div>
          <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe asperiores eligendi obcaecati molestias laudantium enim.</p>
        </div>
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.BACKEND}
          </div>
          <div className="heading-wrap">
            <h2>Backend</h2>
          </div>
          <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe asperiores eligendi obcaecati molestias laudantium enim.</p>
        </div>
        <div className="work-type-wrap">
          <div className="icon-wrap">
            {Icons.MOBILE_APP}
          </div>
          <div className="heading-wrap">
            <h2>Mobile App</h2>
          </div>
          <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe asperiores eligendi obcaecati molestias laudantium enim.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;