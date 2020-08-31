import React from 'react';

import '../styles/components/chip.scss';

/**
 * 
 * @param {{}} props 
 * @param {String} props.title
 */
const Chip = (props) => {
  const { title } = props;

  return (
    <div className='chip-container'>
      <p className='chip-title'>
        {title}
      </p>
    </div>
  );

};

export default Chip;