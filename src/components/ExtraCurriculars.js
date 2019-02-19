import React from 'react';
import Card from './Card';
import educationImg from '../assets/images/card_03.jpeg';
import projectImg from '../assets/images/card_02.jpeg';
import curricularImg from '../assets/images/card_01.jpeg';

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
          subtitle="I'm educated and super cool!"
          color="yellow"
          items={[
            {
              title: 'Web Development Immersive Participant',
              description: 'General Assembly',
            },
            {
              title: "Bachelor's Degree, Anthropology",
              description: 'George Washington University',
            },
            {
              title: 'High School',
              description: 'St. Pauls High School for Girls',
            },
          ]}
          emoji={'🎓'}
          imgSrc={educationImg}
        />
      </div>

      <div className="small-4 extra-small-12 margin bottom single">
        <Card
          title="Projects"
          subtitle="I have worked on some projects"
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
                'Contributed to the DC Metro Google Assistant application.',
              link:
                'https://github.com/JamesIves/dc-metro-google-assistant-action',
            },
          ]}
          emoji={'🥑'}
          imgSrc={projectImg}
        />
      </div>

      <div className="small-4 extra-small-12 margin bottom single">
        <Card
          title="Extra Curricular"
          subtitle="I have done so much stuff"
          color="blue"
          items={[
            {
              title: 'DCJS Co-Organizer',
              description:
                'Assisted with organizing DCJS, the districts largest JavaScript meetup.',
            },
            {
              title: 'Google Women Techmaker Member',
              description: 'Member of the Google Techmaker community.',
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
