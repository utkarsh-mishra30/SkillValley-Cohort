import React from 'react'
import './StudentOffers.css'


function StudentOffers() {
    return (
        <div className='student__Offers'>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at posuere quam. Pellentesque interdum pulvinar nisl ac viverra. Aliquam pretium a risus id euismod. Quisque sed libero non risus malesuada pellentesque. Ut posuere nibh sed tempus tincidunt.</h5>
            <article className='main__Article'>
                <div className='left__Side'>
                    <img src='https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1..v1601313845.jpg'></img>
                </div>
                <div className='right__Side'>
                    <div className='deal__tenure'>Ongoing</div>
                    <div className='price'>$2,99</div>
                    <div className='offer__Detail'>A great little extra</div>
                    <button className='get__Deal'>Get Deal</button>
                </div>
            </article>
        </div>
    )
}

export default StudentOffers;