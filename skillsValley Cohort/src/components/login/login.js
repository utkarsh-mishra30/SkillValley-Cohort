import React from 'react'

const login = () => {
  return (
    <div>
      <div className='container'>
         <form>
            <h1>Sign In/ Login In</h1>

            <label>Username</label><br/>
            <input type="text" name="first_name" required />

            <label>Username or email address</label><br/>
            <input type="text" name="first_name" required />
         </form>

      </div>
    </div>
  )
}

export default login
