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
            <p>Hey there! <span className='emoji-wrap' role="img" aria-label="hello-emoji">&#128075;&#127996;</span> I am </p>
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
          <h1 className='location-info-1'>Ottawa, Canada</h1>
          {/* <h1 className='location-info-2'>Canada</h1> */}
          <p className='some-info-block'>I&apos;m passionate for software development and keen to learn new technologies and frameworks. I strive to develop websites that standout and are visually appealing. I have had a varied experience in both frontend and backend development. </p>
          <p className='contact-email'>
            <a href="mailto:himanshu2904@outlook.com">himanshu2904@outlok.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;