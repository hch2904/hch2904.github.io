import React from 'react';
import NavigationBar from '../components/navbar';

import '../styles/screens/project.scss';
import Chip from '../components/chip';
import Footer from '../components/footer';
import ReactMarkdown from 'react-markdown';


const input = `
# Live demo
Changes are automatically rendered as you type.
## Table of Contents
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
`;

/**
 * 
 * @param {*} props
 * @param {} props.details
 * @param {String} details.heading
 * @param {String} details.subHeading
 * @param {String} details.description
 * @param {String} details.text
 * @param {[]} details.stack
 * @param {[]} details.roles
 */
const ProjectScreen = (props) => {
  const { id } = props.match.params;
  const { heading, subHeading, description,
    text, stack, roles } = props.details;
  console.log(id);
  return (
    <div className="project-container">
      <NavigationBar />
      <div className="main-content-full-bg">
        <div className="generic-960-wrap main-content-wrap">
          <div className="__main-heading-container-wrap">
            <h3 className='__main-heading gutter-bottom'>{heading}</h3>
            <hr className='__fake-border' />
            <h5 className='__main-subheading'>{subHeading}</h5>
          </div>
          <div className="description-wrap">
            <div className="description-left">
              <h6 className='component-header'>Description</h6>
              <p className='component-description'>{description}</p>
              <div className="stack-info-wrap">
                <h6 className='component-header'>Stack</h6>
                <div className="stack-wrap">
                  {stack.map((name) =>
                    (<Chip
                      key={name}
                      title={name}
                    />)
                  )}
                </div>
              </div>
            </div>
            <div className="description-right">
              <h6 className='component-header'>Roles</h6>
              <div className="chip-wrap">
                {roles.map((name) =>
                  (<Chip
                    key={name}
                    title={name}
                  />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="write-up-full-wrap">
        <div className="write-up-content-wrap generic-960-wrap">
          <ReactMarkdown 
            source={input}
          />
        </div>
      </div>
      <Footer bgColor={'#1F1F1F'} />
    </div>
  );
};

export default ProjectScreen;