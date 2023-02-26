import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.css';


function SignUp() {
    return (
        <>
            <div className="signUpMainContainer">
                <div className="signUpMiddleSec">
                    <form className="signUpLeftContainer">
                        <div className="signUpLogo">
                            <div className="f">F</div>
                            <div className="u">u</div>
                            <div className="n">n</div>
                            <div className="d">d</div>
                            <div className="o">o</div>
                            <div className="a">o</div>
                        </div>
                        <div className="signOpTextCreateAccount">
                            Create your Google Account
                        </div>
                        <div className="signUpNameBox">
                            <div>
                                {/* <input className="inputfirstname" placeholder="First Name" /> */}
                                <TextField className="inputfirstname" id="outlined-basic" label="First Name" variant="outlined" size="small" />

                            </div>
                            <div>
                                {/* <input className="inputlastname" placeholder="Last Name" /> */}
                                <TextField className="inputlastname" id="outlined-basic" label="Last Name" variant="outlined" size="small" />

                            </div>
                        </div>

                        <div className="email">

                            {/* <input className="inputemail" placeholder="Username" /> */}
                            <TextField className="inputemail" id="outlined-basic" label="Username" variant="outlined" size="small" />

                        </div>
                        <div className="message">
                            You can use letters, numbers & periods
                        </div>

                        <div className="middlemessge">
                            Use my current email address instead</div>

                        <div className="passwordbox">
                            <div>
                                {/* <input className="password" placeholder="Password" /> */}
                                <TextField className="inputlastname" id="outlined-basic" label="Password" variant="outlined" size="small" />

                            </div>
                            <div>
                                {/* <input className="confirm" placeholder="Confirm" /> */}
                                <TextField className="inputlastname" id="outlined-basic" label="Confirm" variant="outlined" size="small" />

                            </div>
                        </div>
                        {/* <div className="bottommessage">
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </div> */}
                        <div className='checkbox'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Show Password" />
                        </FormGroup>
                            {/* <input type='checkbox' value='Show Password' name='Show Password' /> <label>Show Password</label> */}
                        </div>
                        <div className="signin">
                            <a className="signininstead">Sign in instead</a>
                            <div className='next'>
                                {/* <button className="nextbutton1">Next</button> */}
                                <Button className="nextbutton1" variant="contained">Next</Button>
                            </div>
                        </div>
                    </form>

                    <div className="rightcontainer">
                        <div className="imagebox">
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                        </div>
                        <div className="msg">
                            One account. All of Google working for you.
                        </div>
                    </div>
                </div>
                <div className="signupfooter">
                    <select className="signuplanguage">
                        <option value="English">English (India)</option>
                        <option value="English">English (United States)</option>
                        <option value="English">беларуская</option>
                        <option value="English">ქართული</option>
                    </select>

                    <div className="signupfootercontent">
                        Help  &nbsp;  &nbsp;  &nbsp; Privacy &nbsp; &nbsp; &nbsp; Terms
                    </div>
                </div>

            </div>

        </>
    )
}
export default SignUp