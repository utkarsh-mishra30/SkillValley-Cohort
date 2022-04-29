import React from 'react'
import Header from './components/Header/Header'
import Cards from './components/Mentors/cards'
import img1 from './images/ben.jpg'
import img2 from './images/jonathan.jpg'
import img3 from './images/toby.jpg'
import img4 from './images/stephanie.jpg'
import img5 from './images/morshedl.jpg'
import img6 from './images/christina.jpg'

function Main() {
    return (
        <div>
            <Header />
            <Cards name="Ben Paker" imgUrl={img1} prof="Profession: Business Analyst" skills="Skills: Communication, Data Anylyst, SQL, Project Management" />
            <Cards name="Jonathan Cper" imgUrl={img2} prof="Profession: Software Developer" skills="Skills: Problem Solving, Python, Java, SQL, Database and Data Structure" />
            <Cards name="Toby Parker" imgUrl={img3} prof="Profession: Photographer" skills="Skills: Photography, Graphic Designing, Video editing and Communication" />
            <Cards name="stephanie liverani" imgUrl={img4} prof="Profession: Software Tester" skills="Skills: Research, Java, Problem Solving, Data Anaylst" />
            <Cards name="Morshedl Ali" imgUrl={img5} prof="Profession: Hotel Manager" skills="Skills: Communication, Leadership, social skills, financial management and multi tasking" />
            <Cards name="Christina" imgUrl={img6} prof="Profession: IT Engineer" skills="Skills: Problem Solving, C++, Java, Data Structures, Reactjs and JavaScript" />

        </div>
        
    )
}

export default Main