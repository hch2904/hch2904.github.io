import React from 'react';
import myPhoto from '../assets/images/hch-avatar.png';

import WhatIdo from '../components/whatIdo';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';

import '../styles/screens/about.scss';

const About = () => {
  return (<>
    <div className='about-full-wrap'>
      <div className='generic-960-wrap __my-photo-wrap'>
        <div className="img-wrap">
          <img src={myPhoto} alt="" />
        </div>
      </div>
    </div>
    <AboutMe />
    <WhatIdo />
    <Footer />
  </>
  );
};

export default About;