import React from 'react';
import MyResumeImgs from '../assets/Images/My-Pic2.jpeg';

function Navbars() {

  const handleScrollToAbout = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSkills = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const scrollPosition = 0;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  return (
    <div className='Navbars-Css'>
      <nav className='navbar'>
        <ul className="nav-menu">
          <li><a href="#" onClick={handleScrollToTop}>Home</a></li>
          <li><a href="#" onClick={handleScrollToAbout}>About</a></li>
          <li><a href="#" onClick={handleScrollToSkills}>Skills</a></li>
          <li><a href="#" onClick={handleScrollToProjects}>Projects</a></li>
          <li><a href="#" onClick={handleScrollToContact}>Contact</a></li>
          <li><img src={MyResumeImgs} className='resume-Css' alt="resume-pic" onClick={handleScrollToAbout} /></li>
        </ul>
      </nav>
      <div className='Heading-Type'>
        <h2>WELCOME TO MY WORLD</h2>
      </div>
    </div>
  );
}

export default Navbars;
