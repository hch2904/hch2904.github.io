import React from 'react';

import '../styles/components/projects.scss';

import medicalImg from '../assets/images/medical.png';
import shoppingImg from '../assets/images/shopping.png';
import receiptsImg from '../assets/images/receipts.png';
import Icons from '../assets/svgs/icons';

const Projects = () => {
  return (
    <div className="projects-full-wrap">
      <div className="project-main-content-wrap generic-960-wrap">
        <h3 className='my-projects-headline'>My Recent Projects</h3>
        <span className='__fake-border'></span>
        <div className="cards-wrap">
          <div className="card-container">
            <div className="img-wrap">
              <img src={medicalImg} alt="" />
            </div>
            <h3 className="project-heading">Dashboard For Doctors</h3>
            <p className="__role">Role: Front-End Developer</p>
            <p className="__tech">Tech - ReactJS</p>
            <p className="__mini-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias sapiente nesciunt in facere animi fugiat molestiae.</p>
          </div>
          <div className="card-container">
            <div className="img-wrap">
              <img src={receiptsImg} alt="" />
            </div>
            <h3 className="project-heading">Chat Bots for FB</h3>
            <p className="__role">Role: Backend Developer</p>
            <p className="__tech">Tech - NodeJS</p>
            <p className="__mini-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam, dolorum amet, vitae fuga mollitia.</p>
          </div>
          <div className="card-container">
            <div className="img-wrap">
              <img src={shoppingImg} alt="" />
            </div>
            <h3 className="project-heading">Live Receipts</h3>
            <p className="__role">Role: Backend Developer</p>
            <p className="__tech">Tech - Java/Spring</p>
            <p className="__mini-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et deleniti quae provident repellendus, ratione.</p>
          </div>
        </div>
        <button className="explore-more">
          Explore More
          <span className="icon-wrap">
            {Icons.RIGHT_ARROW}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
