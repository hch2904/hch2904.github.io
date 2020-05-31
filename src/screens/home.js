import React from 'react';
import NavigationBar from '../components/navbar';
import Hero from '../components/hero';
import WhatIdo from '../components/whatIdo';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';

const HomeScreen = () => {
  return (<>
    <NavigationBar />
    <Hero />
    <AboutMe />
    <WhatIdo />
    <Footer />
  </>
  );
};

export default HomeScreen;