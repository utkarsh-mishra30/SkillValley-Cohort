import React from 'react'
import StudentOffers from './StudentOffers'
import './MainStudentOffer.css'

function MainStudentOffer() {
    return (
        <div className='MainStudentOffer'>
            <h1>Students save with Us.</h1>
            <h5>Exclusive discounts from top brands - only for student. Get up to 50% Off tech, fashion, learning and more every time you shop with us, more offers are coming soon.</h5>
            <div className='article__Container'>
                    <StudentOffers
                        image="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_1200x630.v1601052236.jpg"
                        tenure="Ends in 51 days"
                        amount= "£22.99 Echo Dot" 
                        details="You can't deny, Best offer you can ever get"
                        />
                    <StudentOffers
                        image="https://imgproxy.gener8ads.com/uBU4pssDKJa-D4YnITDVbRYyC64Ig0vXNAJYFk9EzHI/fit/512/512/no/0/Z3M6Ly9nZW5lcjgtcHJvZHVjdGlvbi1tYXJrZXRwbGFjZS1hc3NldHMvbGF1bmNoL1BhY2tzaG90X0FtYXpvbi5wbmc.png"
                        tenure="Ongoing"
                        amount= "10% of on £30 Amazon spend (T&C)" 
                        details="When you sign up for first time"
                    />
                         <StudentOffers
                        image="https://photos5.appleinsider.com/gallery/44565-86507-000-lead-Apple-Music-xl.jpg"
                        tenure="Ongoing"
                        amount= "Get Apple Music at just Rs.49" 
                        details="PS: don't use your expired id."
                        />
                        <StudentOffers
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77TVQ0Djvazt97wT7ccYanKD4woMM1ep_nXFwrKrywenRf06xpxP6YgSjxvGNEp7EEtw&usqp=CAU"
                        tenure="Ongoing"
                        amount= "Extra 20% off sitewide" 
                        details="Atleast now go to gym."
                        />
                        <StudentOffers
                        image="https://cdn.lovesavingsgroup.com/logos/edureka.png"
                        tenure="Expired"
                        amount= "Rs.2000 Off Full Stack Development" 
                        details="Expired now, but what then? You wouldn't have used it anyway, so doesn't matter."
                        />
                        <StudentOffers
                        image="https://www.cbazaar.com/Images/cbazaarlogo_dark.png"
                        tenure="Expiring soon"
                        amount= "Extra 10% off for students" 
                        details="Steal it."
                        />
                        <StudentOffers
                        image="https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
                        tenure="Ongoing"
                        amount= "Get Youtube premium at Rs.79" 
                        details="Research says less than 0.1% people under 25 have YT premium, be among those amabanis."
                        />
                        
                        <StudentOffers
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
                        tenure="Ongoing"
                        amount= "MS Office 365 free for students." 
                        details="Still you have to make ppt on your own."
                        />
                        <StudentOffers
                        image="https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/06/How-to-Manage-Subtitles-for-Amazon-Prime-Video-All-Major-Devices.jpg?fit=577%2C320&ssl=1"
                        tenure="Ongoing"
                        amount= "Prime at 50% off. (T&C applied)" 
                        details="Believe in Lord Bezos"
                        />
            </div>
            

        </div>
    )
}

export default MainStudentOffer