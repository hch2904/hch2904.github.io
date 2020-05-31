import React from 'react';
import Icons from '../assets/svgs/icons';

import '../styles/components/footer.scss';
import SocialLinks from './social';

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
            <p>himanshu2904@outook.com</p>
          </div>
        </div>
        <div className="__left-panel-wrap">

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