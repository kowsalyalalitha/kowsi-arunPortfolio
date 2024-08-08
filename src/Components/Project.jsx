// import React from 'react';
// import Card from './Card';

// function Project() {
//   const projects = [
//     {
//       title: 'Html, Css',
//       description: 'This Is Only Use For Html,Css project.',
//       image: 'HtmlProj.jpeg'
//     },
//     {
//       title: 'Html, Css, Javascript',
//       description: 'This Is Only Use For Html,Css, Javascript project.',
//       image: 'JsProject.jpeg'
//     },
//     {
//       title: 'Html, Css, Javascript, and React.js',
//       description: 'This Is Only Use For Html,Csss,Js and React.js project.',
//       image: 'FigmaProject.jpeg'
//     }
//   ];

//   return (
//     <>
//       <div id='projects-section' className='project-container'>
//         <h1 className='projects-heading-style'>Projects</h1>
//         <div className='cards-container'>
//           <Card cards={projects} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Project;


import React from 'react';
import Card from './Card';

function Project() {
  const projects = [
    {
      title: 'Html, Css',
      description: 'This Is Only Use For Html,Css project.',
      image: 'HtmlProj.jpeg',
      link: 'https://my-engineering-proj.netlify.app'  // Add your project link here
    },
    {
      title: 'Html, Css, Javascript and React.js',
      description: 'This Is Only Use For Html,Css, Javascript and React.jc project.',
      image: 'PortfolioProj.jpeg',
      link: 'https://porfolio-create.netlify.app'  // Add your project link here
    },
    {
      title: 'Html, Css, Javascript, and React.js',
      description: 'This Is Only Use For Html,Css,Js and React.js project.',
      image: 'FigmaProject.jpeg',
      link: 'https://my-figma-project.netlify.app'  // Add your project link here
    }
  ];

  return (
    <>
      <div id='projects-section' className='project-container'>
        <h1 className='projects-heading-style'>Projects</h1>
        <div className='cards-container'>
          <Card cards={projects} />
        </div>
      </div>
    </>
  );
}

export default Project;
