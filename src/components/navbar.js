import React from 'react';
import '../styles/components/navigation.scss';

const NavigationBar = (props) => {
  return (
    <div className='navbar-wrap'>
      <div className="desk-wrap">
        <div className='left-panel'>
          {props.logo}
        </div>
        <div className='right-panel'>
          <div className="menu-items-wrap">
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
        </div>
      </div>
      <div className="mobile-wrap">

      </div>
    </div>
  );
};

export default NavigationBar;