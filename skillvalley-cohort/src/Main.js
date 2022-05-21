import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Header/Body/Body'
import Header from './components/Header/Header'
import MentorPage from './components/Mentors/MentorPage'
import MainStudentOffer from './components/StudentOffers/MainStudentOffer'
import Login from './components/login/Login'
import Tutorial from './components/Tutorials/Tutorial'
import Friend from './components/Friend/Friend'
// import StudentOffers from './components/StudentOffers/StudentOffers'

function Main() {
    return (
        <BrowserRouter>
            <div>
            <Routes>
            <Route path="/home" element={[<Header />, <Body />]} />
            <Route path="/offers" element={[<Header />, <MainStudentOffer />]} />
            <Route path="/MentorPage" element={[<Header />, <MentorPage />]} />
            <Route path="/" element={[<Header />, <Login />]} />
            <Route path="/tutorial" element={[<Header />, <Tutorial />]} />
            <Route path="/friends" element={[<Header />, <Friend />]} />
            </Routes>
                
                
            </div>
        </BrowserRouter>
        
        

    )
}

export default Main