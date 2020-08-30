import React from 'react';
import NavigationBar from '../components/navbar';
import WhatIdo from '../components/whatIdo';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';

const About= () => {
  return (<>
    <NavigationBar />
    <AboutMe />
    <WhatIdo />
    <Footer />
  </>
  );
};

export default About;