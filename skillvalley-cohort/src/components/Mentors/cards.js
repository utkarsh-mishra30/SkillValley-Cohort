import React from 'react'
import './cardsElement.css'

const cards = ({name, imgUrl, prof, skills}) => {
  return(
      <div className='Main'>
         <div className='card-container'>
            <div className='mentor-image'>
               <img src={imgUrl} alt='' />
            </div>
            <div className='text-container'>
               <div className='mentor-name'>
                  <h1>{name}</h1>
               </div>
               <div>
                  <h2>{prof}</h2>
               </div>
               <div className='mentor-skills'>
                  <p>{skills}</p>
               </div>
            </div>
         </div>
      </div>
  );
}

export default cards
