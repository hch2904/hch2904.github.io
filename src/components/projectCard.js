import React from 'react';
import '../styles/components/projectCard.scss';

/**
 * 
 * @param {*} props 
 * @param {String} props.heading 
 * @param {String} props.imgName
 * @param {String} props.role
 * @param {String} props.tech
 * @param {String} props.description
 */
const ProjectCard = (props) => {
  const { heading, imgName, role, tech, description } = props;
  /* eslint-disable no-undef */
  const imgSrc = require(`../assets/images/${imgName}`);
  return (
    <div className="card-container">
      <div className="img-wrap">
        <img src={imgSrc} alt="" />
      </div>
      <h3 className="project-heading">{heading}</h3>
      <p className="__role">{role}</p>
      <p className="__tech">{tech}</p>
      <p className="__mini-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
