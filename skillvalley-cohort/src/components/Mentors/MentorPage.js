import React from 'react'
import Cards from './cards'
import './mentorspage.css'

import img1 from '../Mentors/mentors/andrewng.jpg'
import img2 from '../Mentors/mentors/angelayu.jpg'
import img3 from '../Mentors/mentors/jeffham.jpg'
import img4 from '../Mentors/mentors/cleverp.jpg'
import img5 from '../Mentors/mentors/ayushp2.jpeg'
import img6 from '../Mentors/mentors/onkar.jpg'


const MentorPage = () => {
  return (
    <div className='Mbackground'>
      <h1>Meet our mentors</h1> <br/>
      <p id='mbcp'>For any guidance you can connect with mentors via LinkedIn or Twitter</p>
         <Cards name="Andrew Ng" imgUrl={img1} prof="Domain: Machine learning" skills="Skills: Python, Data Anylyst" twtr="https://twitter.com/AndrewYNg" lkdn="https://www.linkedin.com/in/andrewyng/"  />
         <Cards name="Angela Yu" imgUrl={img2} prof="Domain: Web Development" skills="Skills: Html, Css, JS, Database" twtr="https://twitter.com/yu_angela" lkdn="https://www.linkedin.com/in/angela-yu-963a584b/" />
         <Cards name="Jeff Hammerbacher" imgUrl={img3} prof="Domain: Data Analysis" skills="Python, R, Tableu" lkdn="https://www.linkedin.com/in/jhammerb/" twtr="https://twitter.com/hackingdata" />
         <Cards name="Rafeh Qazi" imgUrl={img4} prof="Domain: Web Development" skills="Skills: JavaScript, React" twtr="https://twitter.com/cleverqazi" lkdn="https://www.linkedin.com/in/rafehqazi/"   />
         <Cards name="Ayush Pandey" imgUrl={img5} prof="Domain: Developer, Entrepreneurship" skills="Skills: HTML, CSS, JS, Reactjs, Leadership" twtr="https://twitter.com/pandeyAyush21" lkdn="https://www.linkedin.com/in/pandeyayush21/"/>
         <Cards name="Onkar Ojha" imgUrl={img6} prof="Domain: Developer, Entrepreneurship" skills="Skills: HTML, CSS, JS, Reactjs, Leadership " twtr="https://twitter.com/OnkarOjha4" lkdn="https://www.linkedin.com/in/onkar-ojha-904a85204/" />
    </div>
  )
}

export default MentorPage
