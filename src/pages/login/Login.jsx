import React from 'react';
import "../login/login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MOOSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on MOOSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForget">Forget Pasword? </span>
                        <button className="loginRegisterButton">Create a New Account </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
