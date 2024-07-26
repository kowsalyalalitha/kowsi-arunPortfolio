import React from 'react';
import PortfolioHeading from './Components/PortfolioHeading';
import Navbars from './Components/Navbars';
import Typer from './Components/Typer';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';

const App = () => {
  
  const dataText = [
    "Front-End Developer",
    "Web Developer",
    "Full Stack Developer"
  ];

  return (
  <>
    <PortfolioHeading/>
    <Navbars/>
    <div className="App">
      <header className="App-header">
        <Typer dataText={dataText} />
      </header>
    </div>
    <AboutMe/>
    <Skills/>
    <Project/>
    <ContactMe/>
  </>
  )
}

export default App;