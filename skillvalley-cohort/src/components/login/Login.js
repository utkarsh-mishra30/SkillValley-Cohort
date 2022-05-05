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

    return (
        <div className='myLoginPage'>
           <h1>Login to continue</h1>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with google"
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
         <Link style={{textDecoration: 'none'}} to='/'>
            <div className='home'>Want to ask a question?</div>
         </Link>
        </div>
    );
}
export default Login;