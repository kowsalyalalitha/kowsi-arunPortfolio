import React from 'react';
import topLogo from '../assets/Images/top-logo.png';
import SkillsStatus from '../Components/SkillsStatusBar';

function Skills() {

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='Skills-Container'>
      <h1 id="skills-section" className='Skills-Heading-Style'>My Skills</h1>
      <p className='Skills-para-style'><span className="underline-small"></span>What I Know <span className="underlineOne-small"></span></p>
      <div className='skills-ul-li-style'>
        <h3 className='ul-top-style'>MY CREATIVE SKILLS & KNOWLEDGE:</h3>
        <nav>
          <ul className='skill-ul-Css'>
            <li>I have good knowledge in React.</li>
            <li>Adapting to new technologies is easy, and I learn quickly.</li>
            <li>For data fetching, I use Axios and React Fetch.</li>
            <li>I use Bootstrap for styling.</li>
            <p className='Known-style'>Known Packages:</p>
            <li>npm packages used for React.</li>
            <p className='library-style'>Known Libraries:</p>
            <li>React-Bootstrap.</li>
          </ul>
        </nav>
        <button type="button" className='MoveTop-Style' onClick={handleScrollToTop}>Move Top
          <img src={topLogo} className='topLogo-style' alt="top-pic" />
        </button>
      </div>
      <SkillsStatus/>
    </div>
  );
}

export default Skills;
