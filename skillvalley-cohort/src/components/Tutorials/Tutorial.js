import React from 'react'
import './tutorial.css'

function Tutorial() {
  return (
      <div className='tutorial__Container'>
          <h1 style={{color: 'white', paddingTop: '20px'}}>Here are some best tutorials for you techies</h1>
        <div className='tutorial'>
                <div className='video'>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjpp5kBQLNTSFXXi-bfskBXG178FGkftU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>Cascade Style Sheet</h4>
                </div>
            
                <div className='video'>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>React Introduction</h4>
                </div>
                <div className='video'>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/hKB-YGF14SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>JavaScript Tutorial</h4>
                </div>
                <div className='video'>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>Learn HTML from Pro</h4>
                </div>
                <div className='video'>
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4>Data Structure and algorithm</h4>
                </div>
                <div className='video'> 
                <iframe width="500" height="315" src="https://www.youtube.com/embed/videoseries?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>Data Structure in C++</h4>
                </div>
            </div>
      </div>
    
  )
}

export default Tutorial