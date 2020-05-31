import React from 'react';

import '../styles/components/aboutMe.scss';

const joiningDate = new Date('2015-11-27');
const yearsOfExp = new Date().getUTCFullYear() - joiningDate.getUTCFullYear();

const AboutMe = () => {
  return (
    <div className="about-me-wrap-full">
      <div className="about-me-wrap-960 generic-960-wrap">
        <div className="about-me-heading-wrap">
          <h4 className="__heading">About Me</h4>
          <hr/>
        </div>
        <div className="__content-wrap">
          <div className="__left-panel">
            <h3 className="__heading-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse sapiente consectetur aperiam blanditiis.</h3>
            <p className="__subheading-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis provident nam totam aspernatur ad recusandae sunt? Facere harum repudiandae voluptatum voluptates, delectus temporibus, quos aliquam numquam ratione, veritatis autem illum.</p>
            <div className="experience-wrap">
              <span className="__noxp">{yearsOfExp}</span>
              <div className="__text-wrap">
                <span>Years Of</span>
                <div>Experience</div>
              </div>
            </div>
          </div>
          <div className="__right-panel">
            <h3 className='__heading-text'>Any queries or discussion?</h3>
            <p className="__subheading-text">Lets talk with me</p>
            <h4 className="__email">himanshu2904@outlook.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;