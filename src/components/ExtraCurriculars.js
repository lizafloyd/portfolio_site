import React from 'react';
import Card from './Card';
import educationImg from '../assets/images/ga.jpg';
import projectImg from '../assets/images/projects.jpg';
import curricularImg from '../assets/images/card_02.jpeg';

/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the ExtraCurriculars component.
 */

const ExtraCurriculars = () => (
  <div className="container">
    <div className="row">
      <div className="small-4 extra-small-12 margin bottom single">
        <Card
          title="Education"
          subtitle="Anthropologist by degree. Developer by vocation."
          color="yellow"
          items={[
            {
              title: 'Web Development Immersive Participant',
              description: 'General Assembly, DC',
              link: 'https://generalassemb.ly/',
            },
            {
              title: "Bachelor's Degree, Anthropology",
              description: 'George Washington University, DC',
              link: 'https://www.gwu.edu/',
            },
            {
              title: 'High School',
              description: 'St. Pauls High School for Girls, MD',
            },
          ]}
          emoji={'🎓'}
          imgSrc={educationImg}
        />
      </div>

      <div className="small-4 extra-small-12 margin bottom single">
        <Card
          title="Projects"
          subtitle="Some fun work I've enjoyed - have a look!"
          color="red"
          items={[
            {
              title: 'Portfolio',
              description:
                'Built with React, the website you are currently viewing can be seen on Github',
              link: 'http://github.com/LizaFloyd/portfolio_site',
            },
            {
              title: 'DC Metro Google Assistant App',
              description:
                'Contribute to the DC Metro Google Assistant application.',
              link:
                'https://github.com/JamesIves/dc-metro-google-assistant-action',
            },
          ]}
          emoji={'🚀'}
          imgSrc={projectImg}
        />
      </div>

      <div className="small-4 extra-small-12 margin bottom single">
        <Card
          title="Extra Curricular"
          subtitle="I love contributing to the DC tech community, which is one of the most welcoming groups of crazy kids around."
          color="blue"
          items={[
            {
              title: 'DCJS Co-Organizer',
              description:
                "Assist with organizing DCJS, one of the district's largest front end meetup. All are welcome!",
              link: 'https://www.meetup.com/DC-JavaScript/',
            },
            {
              title: 'Google Women Techmaker Member',
            },
            {
              title: 'Women Who Code DC Member',
            },
          ]}
          emoji={'🍋'}
          imgSrc={curricularImg}
        />
      </div>
    </div>
  </div>
);

export default ExtraCurriculars;
