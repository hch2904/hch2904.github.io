import React from 'react';

import '../styles/components/projects.scss';

import Icons from '../assets/svgs/icons';
import ProjectCard from './projectCard';

import projectData from '../db/projects.json';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  const { max } = props;
  const data = max ? projectData.slice(0, max) : projectData;
  return (
    <div className="projects-full-wrap">
      <div className="project-main-content-wrap generic-960-wrap">
        <h3 className='my-projects-headline'>My Recent Projects</h3>
        <span className='__fake-border'></span>
        <div className="cards-wrap">
          {data.map((project) =>
            <Link key={project.slug} to={`/project/${project.slug}`}>
              <ProjectCard
                key={project.heading}
                heading={project.heading}
                imgName={project.imgName}
                role={project.role}
                tech={project.tech}
                description={project.description}
              />
            </Link>)}
        </div>
        <Link to="/projects">
          <button className="explore-more">
          Explore More
            <span className="icon-wrap">
              {Icons.RIGHT_ARROW}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
