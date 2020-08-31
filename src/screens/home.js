import React from 'react';
import NavigationBar from '../components/navbar';
import Hero from '../components/hero';
import WhatIdo from '../components/whatIdo';
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import Projects from '../components/projects';

const HomeScreen = () => {
  return (<>
    <NavigationBar />
    <Hero />
    <AboutMe />
    <WhatIdo />
    <Projects 
      max={3}
    />
    <Footer />
  </>
  );
};

export default HomeScreen;