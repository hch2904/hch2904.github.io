import React from 'react';

import '../styles/components/social.scss';

import Icons from '../assets/svgs/icons';

const SocialLinks = () => {
  return (<div className="social-wrap">
    <div className="icon-wrap">
      <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/himanshu.chanan">
        {Icons.FACEBOOK}
      </a>
    </div>
    <div className="icon-wrap">
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/hch2904">
        {Icons.INSTAGRAM}
      </a>
    </div>
    <div className="icon-wrap">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/himanshu-chanan/">
        {Icons.LINKED_IN}
      </a>
    </div>
    <div className="icon-wrap">
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hch2904">
        {Icons.TWITTER}
      </a>
    </div>
  </div>);
};

export default SocialLinks;