import React from 'react';
import NavigationBar from '../components/navbar';

import '../styles/screens/project.scss';

const ProjectScreen = (props) => {
  const { id } = props.match.params;
  console.log(id);
  return (
    <div className="project-container">
      <NavigationBar />
      <div className="generic-960-wrap">
        <div className="main-heading-container-wrap">
          <h3>Retail Assistant</h3>
          <h5>Retail Assitant sub heading</h5>
        </div>
        <div className="description-wrap">
          <div className="description-left">
            <h6>Description</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veritatis voluptas atque blanditiis molestiae.</p>
            <h6>Stack</h6>
            <div className="chip-wrap">
              <ul>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
          <div className="description-right">
            <h6>Roles</h6>
            <div className="chip-wrap">
              <ul>
                <li>Front-end development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;