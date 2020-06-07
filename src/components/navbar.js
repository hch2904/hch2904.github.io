import React, { useState, useEffect } from 'react';
import '../styles/components/navigation.scss';
import Icons from '../assets/svgs/icons';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      return setHasScrolled(true);
    } 
    return setHasScrolled(false);
  };

  return (
    <div className={`navbar-wrap ${hasScrolled && 'scrolled'}`}>
      <div className="desk-wrap">
        <div className='left-panel'>
          {Icons.LOGO}
        </div>
        <div className='right-panel'>
          <div className={`menu-items-wrap ${isMobileMenuOpen && 'mobile-menu-open'}`}>
            <div className="menu-item-wrap">
              <button className='hch-btn-primary'>About</button>
            </div>
            <div className="menu-item-wrap">
              <button className='hch-btn-primary'>Work</button>
            </div>
            <div className="menu-item-wrap">
              <button className='hch-btn-primary'>Contact</button>
            </div>
          </div>
          <div className="hamburger-wrap" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? Icons.CLOSE_ICON : Icons.MOBILE_MENU}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;