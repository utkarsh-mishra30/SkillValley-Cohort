import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import personName from  '../login/Login'


function Header() {
    return (
        <div className='header'>
            <div className='main__Header'>
                <div className='left__Container'>

                <Link to='/'>
                    <img src='logo.png' alt=''></img>

                <Link to='/home'>
                    <img src='https://logopond.com/logos/ed8a74549cdf5ebafb564ec3ecc4c231.png' alt=''></img>
 
                </Link>
                <Link to="/friends">
                    <div className='make__Friend' style={{ textDecoration: 'none' }}>Make new friend</div>
                </Link>
                
                        
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8s1EYHkv2tEtNRbZkKT5pnnKNsIWYQZCkw&usqp=CAU' alt=''></img> */}
                </div>
            <div className='right__Container'>
                <Link to="/offers">
                    <div className='section__One'>Student Offers</div>
                </Link>

                <Link to="/MentorPage">
                    <div className='section__Three'>Mentors</div>
                </Link>  
                <Link to="/tutorial">
                    <div className='section__Two'>Tutorials</div>
                </Link>
                
                <Link to="/login">
                    <div className='section__Four'>Login</div>

                <Link to="/">
                    <div className='section__Four'>login</div>

                </Link>
            </div>
            </div>
        </div>
    )
}

export default Header;