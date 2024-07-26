// import React from 'react';
// import NameingLogo from '../assets/Images/Name-Logo1.jpg';
// import EmailLogo from '../assets/Images/Email-logo.webp';
// import PhoneLogo from '../assets/Images/Phone-Logo1.jpg';
// import GithubLogo from '../assets/Images/Github-Logo2.jpg';
// import LinkedInLogo from '../assets/Images/LinkdIn-Logo1.png';

// function ContactMe() {
//     const githubUrl = 'https://github.com/kowsalyalalitha?tab=overview&from=2024-07-01&to=2024-07-24'; 
//   const linkedinUrl = 'https://www.linkedin.com/in/kowsalya-arun-2648b2266/';
//   return (
//     <>
//     <div className='Contact-Container'>
//     <h1 className='Contact-Heading-Style'>Contact Me</h1>
//     <p className='Contact-Paragraph-Css'>-  -  -  -  -  - <span className='Contact-Change-Color'>get in touch</span> -  -  -  -  -  -</p>
//     </div>
//     <div className='Contact-getintouch-Style'>
//         <h3 className='get-in-touch-style'>Get In Touch</h3>
//       <h6 className='names-css'><span className='Name-span-sty'><img src={NameingLogo} className='Name-logo-css' alt="name-pic" /> NAME:</span> <span className='kowsi-style'>N.KOWSALYA</span></h6>

//       <h6 className='email-css'><span className='Email-span-sty'><img src={EmailLogo} className='Email-logo-css' alt="email-pic" /> EMAIL:</span> <span className='email-style'>kowsalyalalitha17@gmail.com</span></h6>

//       <h6 className='phone-css'><span className='Phone-span-sty'> <img src={PhoneLogo} className='Phone-logo-css' alt="phone-pic" /> PHONE:</span> <span className='phone-style'>+91- 8754707453</span></h6>


//       {/* Github and Linkdin Button Imports */}
//       <div className='oneimgs-style'>
//       <a href={githubUrl} target="_blank" rel="noopener noreferrer">
//         <img src={GithubLogo} className='Github-logo-Css' alt="githug-pic" /> <span className='github-span'></span>
//         </a>
//         </div>

//       <div className='twoimgs-style'>
//       <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
//         <img src={LinkedInLogo} className='Linkedin-logo-Css' alt="linkedin-pic" /><span className='linkedin-span'></span>
//         </a>
//         </div>

//         {/* Message imports style */}
//         <div className='Message-Container'>
//             <h1 className='Message-Style'>Message me</h1>
//         </div>
//     </div>
//     </>
//   )
// }

// export default ContactMe;

import React, { useState } from 'react';
import NameingLogo from '../assets/Images/Name-Logo1.jpg';
import EmailLogo from '../assets/Images/Email-logo.webp';
import PhoneLogo from '../assets/Images/Phone-Logo1.jpg';
import GithubLogo from '../assets/Images/Github-Logo2.jpg';
import LinkedInLogo from '../assets/Images/LinkdIn-Logo1.png';

function ContactMe() {
  const githubUrl = 'https://github.com/kowsalyalalitha?tab=overview&from=2024-07-01&to=2024-07-24'; 
  const linkedinUrl = 'https://www.linkedin.com/in/kowsalya-arun-2648b2266/';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
    <div id='contact-section' className='Contact-Container'>
        <h1 id='contact-me-section' className='Contact-Heading-Style'>Contact Me</h1>
        <p className='Contact-Paragraph-Css'>-  -  -  -  -  - <span className='Contact-Change-Color'>get in touch</span> -  -  -  -  -  -</p>
      </div>

      <div className='Contact-getintouch-Style'>
        <h3 className='get-in-touch-style'>Get In Touch</h3>

        <h6 className='names-css'>
          <span className='Name-span-sty'>
            <img src={NameingLogo} className='Name-logo-css' alt="name-pic" /> NAME:
          </span>
          <span className='kowsi-style'>N.KOWSALYA</span>
        </h6>

        <h6 className='email-css'>
          <span className='Email-span-sty'>
            <img src={EmailLogo} className='Email-logo-css' alt="email-pic" /> EMAIL:
          </span>
          <span className='email-style'>kowsalyalalitha17@gmail.com</span>
        </h6>

        <h6 className='phone-css'>
          <span className='Phone-span-sty'>
            <img src={PhoneLogo} className='Phone-logo-css' alt="phone-pic" /> PHONE:
          </span>
          <span className='phone-style'>+91- 8754707453</span>
        </h6>

        {/* GitHub and LinkedIn Button Imports */}
        <div className='oneimgs-style'>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} className='Github-logo-Css' alt="github-pic" /> <span className='github-span'></span>
          </a>
        </div>

        <div className='twoimgs-style'>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} className='Linkedin-logo-Css' alt="linkedin-pic" /><span className='linkedin-span'></span>
          </a>
        </div>

        {/* Message Form */}
        <div className='Message-Container'>
          <h1 className='Message-Style'>Message Me</h1>

          <form className='message-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'></label>
              <input type='text' id='name' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
            </div>

            <div className='form-groupOne'>
              <label htmlFor='email'></label>
              <input type='email' id='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
            </div>

            <div className='form-groupTwo'>
              <label htmlFor='subject'></label>
              <input type='text' id='subject' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} required />
            </div>

            <div className='form-groupThree'>
              <label htmlFor='message'></label>
              <textarea id='message' name='message' value={formData.message} placeholder='Message' onChange={handleChange} required />
            </div>

            <button type='submit'>Send Message</button>
          </form>
        </div>

        {/* Footer Styles */}
        <div className='Footer-Container'>
            <h6 className='footer-css'><span className='create-style-footer'>Created By</span>: N.Kowsalya</h6>
        </div>
    </div>
    </>
  );
}

export default ContactMe;
