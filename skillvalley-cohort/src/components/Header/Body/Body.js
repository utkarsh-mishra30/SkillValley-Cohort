import React, { useState } from 'react'
import './Body.css'
// import Feed from './Feed'
import './Feed.css'


function Body() {
    const [isActive, setActive] = useState("false")
    const handleToggle = () => {
        setActive(!isActive);
    };
    const [input, setInput] = useState('');
    const [posts, setPost] = useState([])

    function addPost(event) {
        console.log("working")
        setPost([...posts, input])
    }

    
    return (
        <div className='body'>
            <div className='white__Area'>
                <div className='picture__Container'>
                    <img className='picture' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' />
                </div>
                <div className='right__Side'>
                <textarea value={input} onChange={event => setInput(event.target.value)} className='input' placeholder='Add your question here'></textarea>
                <button onClick={addPost} className='add__Button'>POST</button>
                </div>
            </div>

          {posts.map(post => (
            <div className='feed'>
      <div className='main__Container'>
        <div className='right__SubContainer'>
          <div className='image__Container'>

          </div>
        </div>
        <div className='left__subContainer'>
          <div className='left__textContainer'>
            <div className='title__Holder'>
              <div className='name'>Aman Chauhan</div>
            </div>
            <div className='postContainer'>{post}
            </div>
            <hr
        style={{
            color: "red",
            backgroundColor: "red",
            height: 2,
            width: "90%",
            margin: "auto",
            marginBottom: "10px"
        }}
    />
            <div className='icon__Container'>
              <div className='like'>
                <div className={isActive ? "heart" : "is-active"} onClick={handleToggle}></div>
              </div>
              <div className='comment__Container'>
                <a href="#" className='comment'></a>
              </div>
            </div>
            <div className='user__Comments'>
              <textarea placeholder='Enter your comment' className='set__Comment'></textarea>
              <div className='comment__ButtonHolder'>
                <button className='user__CommentButton'>Comment</button>
              </div>
              <div className='user__CommentHolder'>
                  <div className='user__CommentLeft'>
                    <div className='user__CommentPicture'></div>
                  </div>
                  <div className='user__CommentRight'>
                      <div className='user__CommentName'>Aman Chauhan</div>
                      <div className='user__CommentBottom'>
                        <ul>
                          <li>Aman</li>
                        </ul>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
          ))}

        </div>
    )
}

export default Body