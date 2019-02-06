import React, {Component, Fragment} from 'react';
import WorkExperience from './WorkExperience';
import FunFacts from './FunFacts';
import ContactForm from './ContactForm';
import ExtraCurriculars from './ExtraCurriculars';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import StackOverflowIcon from './icons/StackOverflowIcon';
import profile from '../assets/images/profile.jpg';
/**
 * Renders the main App components.
 */
class App extends Component {
  /** Renders the App component.
   * @returns {string} - Returns JSX representation of the App component.
   */
  render() {
    return (
      <Fragment>
        <a href="#main" className="skip">
          Skip to Main Content
        </a>
        <header id="top">
          <div className="banner" />

          <img
            src={profile}
            className="small-3 responsive-image header-image"
            alt="Placeholder"
          />
        </header>

        <main role="main">
          <section className="container">
            <div className="header row align-center margin-horizontal">
              <div className="small-9">
                <h1 className="header-text title">Liza Floyd</h1>
                <h2 className="accent">
                  I make websites and lattes. The websites are prettier but the
                  lattes taste better.
                </h2>
                <p>
                  I'm a people person who also loves code. I enjoy leveraging my
                  engineering skills to make the internet a less scary place for
                  the folks at home. I live and breathe HTML, CSS, JavaScript
                  and React, and I've also dabbled with Node, Angular and Ruby
                  on Rails. If I'm not learning, I'm not happy.
                </p>
              </div>
              <div className="social-icons full-width">
                <div className="icon-container small-6">
                  <a href={process.env.REACT_APP_LINKEDIN_ANCHOR} role="button">
                    <LinkedInIcon />
                  </a>
                  <a href={process.env.REACT_APP_GITHUB_ANCHOR} role="button">
                    <GithubIcon />
                  </a>
                  <a href={process.env.REACT_APP_TWITTER_ANCHOR} role="button">
                    <TwitterIcon />
                  </a>
                  <a
                    href={process.env.REACT_APP_STACKOVERFLOW_ANCHOR}
                    role="button"
                  >
                    <StackOverflowIcon />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="work" className="background-gray border-gray bottom top">
            <div className="container">
              <WorkExperience />
            </div>
          </section>
          <section id="facts" className="container">
            <FunFacts />
          </section>

          <section
            id="curricular"
            className="background-gray border-gray bottom top"
          >
            <div className="container">
              <ExtraCurriculars />
            </div>
          </section>
          <section id="contact" className="container">
            <ContactForm />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
