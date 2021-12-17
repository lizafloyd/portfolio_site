import React from 'react';
import PartnerSlider from './PartnerSlider';
import {partners} from '../constants';

/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the WorkExperience component.
 */
const WorkExperience = () => (
  <div className="header row margin-horizontal vertical-align">
    <div className="small-5 extra-small-12 order-2">
      <PartnerSlider partners={partners} />
    </div>
    <div className="small-7 extra-small-12">
      <h2 className="subtitle border-bottom-yellow">Work Experience</h2>
      <p>
        I joined The Atlantic in 2019 to help implement and launch their new
        paywall. After we launched on time and to as much praise as a paywall is
        likely to get, I joined the Subscriptions team, which built an account
        management site using React and a Django-powered API to hook into our
        Stripe setup. Now, I'm on the Habit team, which has already launched
        subscriber-only newsletters, and is developing site search and customer
        personalization capabilities.
      </p>
      <p>
        Previously, I worked for The Washington Post as part of their software
        as a service team. We did full-site buildouts for more than a dozen
        clients in the three years I was on the team, using a proprietary
        rendering engine to power JSTL—and later React—sites. I got experience
        with every part of the process, from leading sales meetings, to owning
        project backlogs, culminating in being Technical Lead for a mid-sized
        client buildout in Europe.
      </p>
      <p>
        I've worked primarily with React, HTML, CSS, JavaScript, and GraphQL,
        and have implemented them using a variety of test suites, cloud
        configurations, and API frameworks. If you're interested in some of my
        work, select a partner logo to the left to see their site.
      </p>
      <p>
        Before I was a developer, I worked in fundraising and then as a
        bartender. It might not be strictly relevant to my current career, but
        it's never a bad thing to make a mean martini.
      </p>
    </div>
  </div>
);

export default WorkExperience;
