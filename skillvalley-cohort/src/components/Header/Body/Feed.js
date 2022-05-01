// import React, { useState } from 'react'
// import './Feed.css'

// function Feed() {
//   const [isActive, setActive] = useState("false")
//   const handleToggle = () => {
//     setActive(!isActive);
//   };
  
//   return (
//     <div className='feed'>
//       <div className='main__Container'>
//         <div className='right__SubContainer'>
//           <div className='image__Container'>

//           </div>
//         </div>
//         <div className='left__subContainer'>
//           <div className='left__textContainer'>
//             <div className='title__Holder'>
//               <div className='name'>Aman Chauhan</div>
//             </div>
//             <div className='postContainer'>With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.
//             </div>
//             <div className='icon__Container'>
//               <div className='like'>
//                 <div className={isActive ? "heart" : "is-active"} onClick={handleToggle}></div>
//               </div>
//               <div className='comment__Container'>
//                 <a href="#" className='comment'></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Feed;