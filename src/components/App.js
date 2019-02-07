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
              <div className="social-icons margin-horizontal full-width">
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
          <section id="contact" className="container margin-horizontal">
            <h2 className="subtitle text-center">Let's Get in Touch</h2>
            <p>
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I'm in a transitional
              period so I don't wanna kill you, I wanna help you. But I can't
              give you this case, it don't belong to me. Besides, I've already
              been through too much shit this morning over this case to hand it
              over to your dumb ass.{' '}
            </p>

            <p>
              You think water moves fast? You should see ice. It moves like it
              has a mind. Like it knows it killed the world once and got a taste
              for murder. After the avalanche, it took us a week to climb out.
              Now, I don't know exactly when we turned on each other, but I know
              that seven of us survived the slide... and only five made it out.
              Now we took an oath, that I'm breaking now. We said we'd say it
              was the snow that killed the other two, but it wasn't. Nature is
              lethal but it doesn't hold a candle to man.{' '}
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
