import React from 'react';
import './App.scss';
import resume from './assets/misc/carroll-resume.pdf';


function App() {
  return (
    <div className="App">
      <header role="banner" className="bg-img">
        <div className="header-content">
          <h1>Hello, I'm Alex.</h1>
          <hr />
          <h2>Experienced Full-Stack Engineer based in San Diego, CA</h2>
        </div>
      </header>
      <main role="main">
        <ul>
          <li>
            <a href={resume}>Resume</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexcarrollmn/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/alexcarrollmn/" target="_blank">GitHub</a>
          </li>
        </ul>
        <hr />
        <p>A seasoned full-stack engineer with a passion for good design and UX with over eight years experience working on highly trafficked applications.  I have experience in the latest javascript tools, including Angular and React on the front-end, and Node.js on the back-end, and strive to write clean, tested, and accessible code.  For the last four years I have been successfully working remotely as an individual contributor and am looking forward to a role where I can help a team bring ideas to reality.</p>
      </main>
    </div>
  );
}

export default App;
