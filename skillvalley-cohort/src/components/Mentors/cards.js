import React from 'react'
import './cardsElement.css'

import twtrimg from "./mentors/twittericon.png"
import linkedin from "./mentors/linkedinicon.png"

const cards = ({name, imgUrl, prof, skills, twtr, lkdn}) => {
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
                  <h4>{prof}</h4>
               </div>
               <div className='mentor-skills'>
                  <p>{skills}</p>
               </div>

               <div className='socials'>
                  <a href={twtr} target="_blank"><img src={twtrimg}></img></a>
                  <a href={lkdn} target="_blank"><img src={linkedin}></img></a>
               </div>
            </div>
            
         </div>
      </div>
  );
}

export default cards
