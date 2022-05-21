import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import './loginStyle.css';

const clientId = "484326846647-88kkl8tb0gag56amll3s6iiik5uuj77v.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    // const [nameInput, setNameInput] = useState();
    // const [personName, setPersonName] = useState();
    // const nameSubmit = () => {
    //     if(personName !== undefined){
    //         setPersonName(nameInput)
    //         console.log(personName)
    //     }
    // }

    return (
        <div className='myLoginPage'>
                <div className='container'>
               <h1 style={{color: 'black', marginTop: '20px'}}>Login to continue</h1>
               <form>
                    <label>Name:*<br/><input required placeholder='Enter email' type="text" name="name" /></label>
                    <label>Password:*<br/><input required placeholder='Enter password' type="password" name="name" /></label>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                { showloginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Click here to login"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}
    
                { showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out from here"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
                </div>
                {/* <input value={nameInput} placeholder='pick your name' onChange={event => setNameInput(event.target.value)}></input>
                <button onClick={nameSubmit}>Submit</button> */}
             <Link style={{textDecoration: 'none'}} to='/home'>
                <div className='home'>Click me if you have signed in. Want to ask a question?</div>
             </Link>
            </div>   
    );
}
export default Login;