import React from 'react';
import PartnerSlider from './PartnerSlider';

/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the WorkExperience component.
 */
const WorkExperience = () => (
  <div className="header row margin-horizontal">
    <div className="small-5">
      <PartnerSlider />
    </div>
    <div className="small-7">
      <h2 className="subtitle">Work Experience</h2>
      <p>
        My work experience has been quite varied, but it's always had the same
        unifying themes: working hard, taking ownership, paying attention to
        detail, and learning unbelievably fast. And that's how I like it.
      </p>
      <p>
        The last few years I've worked for Arc Publishing, the SAAS arm of the
        Washington Post. The work is an interesting mix of product, agency, and
        consultancy work, so I've worn every hat you can imagine. I've owned
        projects, joined sales calls, lead teams, faced down timelines, managed
        client accounts, developed complex renderings--you name it, I've done
        it. At Arc, I started as a junior developer, and have since held titles
        as Solutions Engineer, midlevel Developer, and now as technical lead,
        delivering a full site build out to a client in Europe.
      </p>
      <p>
        I've worked primarily with React, HTML, CSS, JavaScript, Webpack,
        JSP/JSTL, SCSS, Enzyme, Jest, and Regex. If you're interested in some of
        my work, select a partner logo to the left to see their site.
      </p>
      <p>
        Before I was a developer, I've worked in fundraising and as a bartender.
        And I ought to tell you, not to brag, just so you know: I serve a hell
        of a Bud.
      </p>
    </div>
  </div>
);

export default WorkExperience;
