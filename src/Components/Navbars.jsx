import React, { useState } from 'react';
import MyResumeImgs from '../assets/Images/My-Pic2.jpeg';

function Navbars() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (sectionId) => (event) => {
    event.preventDefault();
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className='Navbars-Css'>
      <nav className='navbar'>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#" onClick={handleScrollToSection('top')}>Home</a></li>
          <li><a href="#" onClick={handleScrollToSection('about-section')}>About</a></li>
          <li><a href="#" onClick={handleScrollToSection('skills-section')}>Skills</a></li>
          <li><a href="#" onClick={handleScrollToSection('projects-section')}>Projects</a></li>
          <li><a href="#" onClick={handleScrollToSection('contact-section')}>Contact</a></li>
          <li><img src={MyResumeImgs} className='resume-Css' alt="resume-pic" onClick={handleScrollToSection('about-section')} /></li>
        </ul>
      </nav>
      <div className='Heading-Type'>
        <h2 className='Myworld-style'>WELCOME TO MY WORLD</h2>
      </div>
    </div>
  );
}

export default Navbars;
