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
        Normally, both your asses would be dead as fucking fried chicken, but
        you happen to pull this shit while I'm in a transitional period so I
        don't wanna kill you, I wanna help you. But I can't give you this case,
        it don't belong to me. Besides, I've already been through too much shit
        this morning over this case to hand it over to your dumb ass.
      </p>
      <p>
        Do you see any Teletubbies in here? Do you see a slender plastic tag
        clipped to my shirt with my name printed on it? Do you see a little
        Asian child with a blank expression on his face sitting outside on a
        mechanical helicopter that shakes when you put quarters in it? No? Well,
        that's what you see at a toy store. And you must think you're in a toy
        store, because you're here shopping for an infant named Jeb.
      </p>
    </div>
  </div>
);

export default WorkExperience;
