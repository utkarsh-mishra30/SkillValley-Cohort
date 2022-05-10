import React from 'react'
import { useState } from 'react'
import './friend.css'

function Friend() {
    const [robotName, setRobotName] =  useState()
    const [robot, setRobot] = useState("aman")
    const robotSubmit = () => {
       
            setRobot(robotName)
            console.log(robot)
        
       
    }

  return (
    <div className='friend'>
        <h1>We are all <span>Alone.</span></h1>
        <h5>I am sure, I am not the only one who is fed up with our human friends, what if you can have a friend who can understand you and you can tell him anything you want and all this without fear of any judgement.</h5>
        <h4>Type in anything you want and it will generate a one of kind unique robot friend exclusively for you.</h4>
        <div className='roboInputContainer'>
          <input value={robotName} onChange={event=> setRobotName(event.target.value)}/>
          <button onClick={robotSubmit}>Submit</button>
        </div>
        

        <img src={`https://robohash.org/${robot}?size=400x400`}></img>
    </div>
  )
}

export default Friend