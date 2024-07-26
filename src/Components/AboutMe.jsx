
import React from 'react';
import ResumePic from '../assets/Images/My-Pic.jpeg';
import Navbars from './Navbars';

function DownloadButton() {
  
    const handleDownload = () => {
      const url = `My Resume.pdf`;
      window.open(url, '_blank');
  
      const link = document.createElement('a');
      link.href = url;
      link.download = 'My Resume.pdf'; // Provide a file name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
  return (
    <>
    <Navbars/>
    <div id='about-section' className='AboutMe-Container'>
      <h1 className='About-Heading'>
        About Me
      </h1>
      <h6 className='Sub-Heading'>
        -      -      -      -      -      -<span className='color-change-subHead'> Who i am </span>-      -      -      -      -      -
      </h6>
      <h4 className='about-me-paragraphs'>
        Hey! I' m <span className='text-color'> KowsalyaArun N</span>
      </h4>

      <img src={ResumePic} className='resume-picture' alt="resume-pic" />

      <p className='about-me-para-css'>
        A Developer based in India🌍. I’m recently <br />learning Web devlopers and other eveloper<br /> <span className='marginLeft-Css'> related topics, currently playing around</span> <br /> <span className='marginLeft1-Css'>with <span className='react-color-css'> React.Js</span> 👨‍💻.</span>
        <br />
        <br />

        <span className='marginleft-2ndPara'> Other than Programming my hobbies are <br /> <span className='playing-css'> playing </span>📷 i love <span className='travelling-css'>travelling</span> and exploring <br /> <span className='marginLeft2-Css'> new places 🗺️.</span></span>
        <br />
        <br />

        I'm fully committed to creating asthetically
        <span className='beauty-css'><br /> beautiful</span> and a <span className='resposive-css'>resposive  react</span> for the best <br /> <span className='marginLeft3-Css'> user experience 🖥️.
         I'll love to work with </span><br /> <span className='marginLeft4-Css'> both startup  and <span className='reputed-css'>reputed</span> companies.</span>
      </p>

      <div className='download-cv-style'>
        <button type="button" className='download-cv-Css' onClick={handleDownload}>Download CV</button>
      </div>
    </div>
    </>
  );
}

export default DownloadButton;
