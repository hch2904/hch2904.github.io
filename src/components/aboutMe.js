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
          <span className='__fake-border'></span>
        </div>
        <div className="__content-wrap">
          <div className="__left-panel">
            <h3 className="__heading-text">I am a software engineer by profession, I did my graduation from National Institute of Technology Delhi, India. </h3>
            <p className="__subheading-text">Through five years of my career, I have had opportunity to explore the world of software development with languages such as Javascript,Java, HTML, CSS, SQL and many more. I have closely worked with clients across countries which has helped me understand various software development lifecycles (Agile, waterfall etc) and their pros and cons, which has made me a good coder and a better developer.</p>
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
            <p className="__subheading-text">Let&apos;s talk</p>
            <h4 className="__email">
              <a href="mailto:himanshu2904@outlook.com">himanshu2904@outlook.com</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;