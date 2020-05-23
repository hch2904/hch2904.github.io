import React from 'react';
import NavigationBar from '../components/navbar';

import Logo from '../assets/svgs/logo';
import Hero from '../components/hero';

const HomeScreen = () => {
  return (<>
    <NavigationBar 
      logo={Logo}
    />
    <Hero />
  </>
  );
};

export default HomeScreen;