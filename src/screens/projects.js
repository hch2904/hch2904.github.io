import React from 'react';
import Footer from '../components/footer';
import projects from '../db/projects.json';
import ProjectCard from '../components/projectCard';

import '../styles/screens/projects.scss';

const Projects = () => {
  return (
    <>
      <div className='project-screen-wrap'>
        <div className="generic-960-wrap main-content-wrap">
          <div className='project-header-wrap'>
            <h2 className='page-header gutter-bottom'>Projects</h2>
            <h3 className="component-header">My Recent Work</h3>
            <div className='__fake-border' />
          </div>
          <div className='project-card-wrap'>
            {projects.map((project) =>
              <ProjectCard
                key={project.heading}
                heading={project.heading}
                imgName={project.imgName}
                role={project.role}
                tech={project.tech}
                description={project.description}
              />)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;