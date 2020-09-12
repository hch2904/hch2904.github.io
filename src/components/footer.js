import React from 'react';
import Icons from '../assets/svgs/icons';

import '../styles/components/footer.scss';
import SocialLinks from './social';

import myPhoto from '../assets/images/hch.jpg';

const Footer = (props) => {
  const { bgColor } = props;
  return (
    <div className="footer-wrap" style={bgColor ? { backgroundColor: bgColor } : {}}>
      <div className="__content-wrap generic-960-wrap">
        <div className="__left-panel-wrap">
          <h3>Himanshu Chanan</h3>
          <h4>Software Developer</h4>
          <div className="contact-info-wrap">
            <p>Lets get in touch</p>
            <p><a className='__email' href="mailto:himanshu2904@outlook.com">himanshu2904@outook.com </a></p>
          </div>
        </div>
        <div className="__right-panel-wrap">
          <div className="img-wrap">
            <img src={myPhoto} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-2-wrap generic-960-wrap">
        <span className="logo-wrap">{Icons.LOGO}</span>
        <p><span className='bold-text'>Thanks for scrolling,</span> thats all folks.</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
