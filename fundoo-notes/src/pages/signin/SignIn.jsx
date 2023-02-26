import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signin/SignIn.css';

function SignIn() {

    return (
        <>
            <div className="body">
                <form className="signInFormBody">
                    <div className="signInLogo">
                        <div className="f">F</div>
                        <div className="u">u</div>
                        <div className="n">n</div>
                        <div className="d">d</div>
                        <div className="o">o</div>
                        <div className="a">o</div>
                    </div>
                    <div className="signinBox">Sign in</div>
                    <div className="signInUserLine">
                        Use your Google Account
                    </div>
                    <div className="signInInputBox">
                        <div className="input" >
                            {/* <input className="InputEmail" placeholder="Email or phone" /> */}
                            <TextField className="signInInputEmail" id="outlined-basic" label="Enter your Email" variant="outlined" />
                        </div>
                        <div className="input" >
                            {/* <input className="InputPassword" placeholder="Password" /> */}
                            <TextField className="signInInputPassword" id="outlined-basic" label="Password" variant="outlined"
                                type='password'/>
                        </div>
                    </div>
                    <div className="signInForgotBox">
                        <div className="signInForgotEmail">Forgot email?</div>
                        <div className="signInForgotPassword">Forgot password?</div>
                    </div>
                    <div className="bottomTextLine">
                        <p>Not your computer? Use Guest mode to sign in privately.</p>
                    </div>
                    <div className="bottomTextLine2">Learn more.</div>

                    <div className="CreateAccountLogin">
                        <a  className="CreateAccountLink">Create Account</a>
                        {/* <button className="LoginButton">Next</button> */}
                        <Button className="LoginButton" variant="contained">Next</Button>
                    </div>
                </form>
                <div className="signInFooter">
                    <select className="signInLanguage">
                        <option value="English">English (India)</option>
                        <option value="English">English (United States)</option>
                        <option value="English">беларуская</option>
                        <option value="English">ქართული</option>
                    </select>

                    <div className="signInFooterContent">
                        Help  &nbsp;  &nbsp;  &nbsp; Privacy &nbsp; &nbsp; &nbsp; Terms
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;