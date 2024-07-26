import React from 'react';

function SkillsStatus() {
  return (
    <div className="skills-status">
      <div className="skill">
        <div className="skill-name">HTML<span className='percentage-css'>95%</span></div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: '95%' }}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">CSS<span className='percentage-css'>90%</span></div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">JavaScript<span className='percentage-css'>80%</span></div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">React<span className='percentage-css'>80%</span></div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name">Boostrap<span className='percentage-css'>85%</span></div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: '85%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default SkillsStatus;
