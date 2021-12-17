import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import WorkExperience from './WorkExperience';
import FunFacts from './FunFacts';
import ContactForm from './ContactForm';
import ExtraCurriculars from './ExtraCurriculars';
import profile from '../assets/images/profile.jpg';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import StackOverflowIcon from './icons/StackOverflowIcon';
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
        <Header
          skipLink={true}
          profileImage={profile}
          profileAlt="Liza Floyd"
          bannerClasses="banner"
        />

        <main role="main">
          <section className="container">
            <div className="header row align-center margin-horizontal">
              <div className="small-9 extra-small-12">
                <h2 className="accent">
                  I make websites and lattes. The websites are prettier but the
                  lattes taste better.
                </h2>
                <p>
                  I'm a people person who loves code. I enjoy leveraging my
                  engineering skills to make the internet a less scary place for
                  the folks at home. I live and breathe HTML, CSS, JavaScript
                  and React, and I've also dabbled with Node, Angular, Ruby on
                  Rails, and Python. If I'm not learning, I'm not happy.
                </p>
              </div>
              <div className="social-icons margin top single full-width">
                <div className="icon-container extra-small-12 small-6">
                  <a
                    href={process.env.REACT_APP_LINKEDIN_ANCHOR}
                    role="button"
                    aria-label="linkedin link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={process.env.REACT_APP_GITHUB_ANCHOR}
                    role="button"
                    aria-label="github link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={process.env.REACT_APP_TWITTER_ANCHOR}
                    role="button"
                    aria-label="twitter link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href={process.env.REACT_APP_STACKOVERFLOW_ANCHOR}
                    role="button"
                    aria-label="stack overflow link"
                    target="_blank"
                    rel="noopener noreferrer"
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
          <section id="curricular" className="bottom top padding-horizontal">
            <ExtraCurriculars />
          </section>
          <section
            id="facts"
            className=" bottom top background-gray border-gray"
          >
            <div className="container">
              <FunFacts />
            </div>
          </section>
          <section id="contact" className="container padding-horizontal">
            <h2 className="subtitle text-center center-border">
              Let's Get in Touch
            </h2>
            <p>
              New to tech and need a confidence boost? Want to work together on
              a project? Need meetup suggestions? Or just hoping to crib my
              latte methods? Please reach out!
            </p>

            <ContactForm />
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
