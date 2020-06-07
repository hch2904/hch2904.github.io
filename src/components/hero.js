import React, { useEffect } from 'react';

// import myImg from '../assets/images/my-hero-img.png';
import bgVideo from '../assets/bg-video.mp4';

import '../styles/components/hero.scss';
import SocialLinks from './social';
import Icons from '../assets/svgs/icons';

const Hero = () => {

  useEffect(() => {
    const namePaths = document.querySelectorAll('.name-wrap svg path');
    const pathLengths = [];
    for (let i = 0; i < namePaths.length; i++) {
      const path = namePaths[i];
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      path.style.animation = 'name-move-fill 2s ease forwards 0.6s';
      pathLengths.push(namePaths[i].getTotalLength());
    }
  });

  return (
    <div className="hero-wrap">
      <video className='video-wrap' autoPlay muted loop id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="_main-content-wrap">
        <div className="img-name-wrap">
          <div className='name-wrap'>
            <div className="fname">{Icons.HIMANSHU}</div>
            <div className="lname">{Icons.CHANAN}</div>
            <hr className='fake-border' />
            <SocialLinks />
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