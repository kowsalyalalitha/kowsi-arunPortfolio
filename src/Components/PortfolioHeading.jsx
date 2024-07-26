import React from 'react';
import PortfolioImgs from '../assets/Images/Portfolio-Img.png';

function PortfolioHeading() {
  return (
    <>
    <div className="Header-Section">
        <img src={PortfolioImgs} className='Portfolio-Img-Css' alt="portfolio-pic" />
        <h3 className='Heading-Css'>Portfolio</h3>
    </div>
    </>
  )
}

export default PortfolioHeading;