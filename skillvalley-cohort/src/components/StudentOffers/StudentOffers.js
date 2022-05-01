import React from 'react'
import './StudentOffers.css'


function StudentOffers({image, tenure, amount, details}) {
    return (
        <div className='student__Offers'>
            <article className='main__Article'>
                <div className='left__Side'>
                    <img src={image}></img>
                </div>
                <div className='right__Side'>
                    <div className='deal__tenure'>{tenure}</div>
                    <div className='price'>{amount}</div>
                    <div className='offer__Detail'>{details}</div>
                    <button className='get__Deal'>Get Deal</button>
                </div>
            </article>
        </div>
    )
}

export default StudentOffers;