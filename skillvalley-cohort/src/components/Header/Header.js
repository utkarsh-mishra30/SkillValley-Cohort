import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='main__Header'>
                <div className='left__Container'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEn_CtYPQz-T6HCZsNVNZW8pmGh55nkOpFJ9lOyU64YKTRg7v6MSra0j3TnJmh1sM7PU&usqp=CAU'></img>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8s1EYHkv2tEtNRbZkKT5pnnKNsIWYQZCkw&usqp=CAU'></img>
                </div>
            <div className='right__Container'>
                    <div className='section__One'>Student Offers</div>
                    <div className='section__Two'>Tutorials</div>
                    <div className='section__Three'>Mentors</div>
            </div>
            </div>
        </div>
    )
}

export default Header;