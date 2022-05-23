import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
// import personName from  '../login/Login'
import logo1 from '../images/logo2.JPG'

function Header() {
    return (
        <div className='header'>
            <div className='main__Header'>
                <div className='left__Container'>

                {/* <Link to='/'>
                    <img src={logo1} alt=''></img>
                </Link> */}

                <Link to='/home'>
                    <img style={{width: '160px', height: '60px', margin: '15px'}} src={logo1} alt=''></img>
                    {/* <img src='https://logopond.com/logos/ed8a74549cdf5ebafb564ec3ecc4c231.png' alt=''></img> */}
 
                </Link>
                <Link to="/home">
                    <div className='make__Friend' style={{ textDecoration: 'none' }}>Home</div>
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
                
                {/* <Link to="/login">
                    <div className='section__Four'>Login</div>

                </Link> */}
                <Link to="/">
                    <div className='section__Four'>Login</div>

                </Link>
            </div>
            </div>
        </div>
    )
}

export default Header;