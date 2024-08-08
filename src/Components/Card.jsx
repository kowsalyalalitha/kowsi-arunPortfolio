// import React from 'react';

// function Card({ cards }) {
//   return (
//     <div className='card-container'>
//       {cards.map((card, index) => (
//         <div key={index} className='card'>
//           <img src={card.image} alt={card.title} className='card-image' />
//           <div className='card-content'>
//             <h2 className='card-title'>{card.title}</h2>
//             <p className='card-description'>{card.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;

import React from 'react';

function Card({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className='card'>
          <a href={card.link} target='_blank' rel='noopener noreferrer'>
            <img src={card.image} alt={card.title} className='card-image' />
          </a>
          <div className='card-content'>
            <h2 className='card-title'>{card.title}</h2>
            <p className='card-description'>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
