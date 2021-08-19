import React from 'react';
import ReactGA from 'react-ga';
import './App.scss';
import resume from './assets/misc/carroll_alex-resume.pdf';

const trackingId = "UA-16262936-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <div className="App">
      <header role="banner" className="bg-img">
        <div className="header-content">
          <h1>Hello, I'm Alex.</h1>
          <h2>Experienced Remote Lead Engineer based in San Diego, CA</h2>
        </div>
      </header>
      <main role="main">
        <ul>
          <li>
            <a href={resume} target="_blank">Resume</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexcarrollmn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/alexcarrollmn/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <hr />
        <p>
          With experience leading high stakes, high traffic applications, I have
          worked in several disparate verticals. After successfully leading
          development and working with remote teams for six years and a decade
          of total experience, I am looking for a remote role where I can bring my
          experience and leadership skills to an exciting organization.
        </p>
      </main>
    </div>
  );
}

export default App;
