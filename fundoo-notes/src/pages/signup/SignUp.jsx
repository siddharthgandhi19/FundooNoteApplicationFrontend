import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.css';
import { SignUpApi } from '../../services/UserServices';


const nameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/


function SignUp() {
    const [userSignup, setUserSignup] = useState({

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [regexSignup, setRegexSignup] = useState({
        firstNameError: false,
        firstNameHelperText: '',
        lastNameError: false,
        lastNameHelperText: '',
        emailError: false,
        emailHelperText: '',
        passwordError: false,
        passwordHelperText: '',
        confirmPasswordError: false,
        confirmPasswordHelperText: ''
    });

    const InputFirstName = (e) => {
        setUserSignup(preState => ({ ...preState, firstName: e.target.value }))
    }
    const InputLastName = (e) => {
        setUserSignup(preState => ({ ...preState, lastName: e.target.value }))
    }
    const InputEmail = (e) => {
        setUserSignup(preState => ({ ...preState, email: e.target.value }))
    }
    const InputPassword = (e) => {
        setUserSignup(preState => ({ ...preState, password: e.target.value }))
    }
    const InputConfirmPassword = (e) => {
        setUserSignup(preState => ({ ...preState, confirmPassword: e.target.value }))
    }
    const Submit = () => {
    

        if (nameRegex.test(userSignup.firstName) === false) {
            setRegexSignup(preState => ({ ...preState, firstNameError: true, firstNameHelperText: "First Letter Must Capital" }))
        }
        else if (nameRegex.test(userSignup.firstName) === true) {
            setRegexSignup(preState => ({ ...preState, firstNameError: false, firstNameHelperText: "" }))
        }

        if (nameRegex.test(userSignup.lastName) === false) {
            setRegexSignup(preState => ({ ...preState, lastNameError: true, lastNameHelperText: "First Letter Must Capital" }))
        }
        else if (nameRegex.test(userSignup.lastName) === true) {
            setRegexSignup(preState => ({ ...preState, lastNameError: false, lastNameHelperText: "" }))
        }

        if (emailRegex.test(userSignup.email) === false) {
            setRegexSignup(preState => ({ ...preState, emailError: true, emailHelperText: "Enter correct format" }))
        }
        else if (emailRegex.test(userSignup.email) === true) {
            setRegexSignup(preState => ({ ...preState, emailError: false, emailHelperText: "" }))
        }

        if (passwordRegex.test(userSignup.password) === false) {
            setRegexSignup(preState => ({ ...preState, passwordError: true, passwordHelperText: "Use 8 or more characters with a mix of letters, numbers & symbols" }))
        }
        else if (passwordRegex.test(userSignup.password) === true) {
            setRegexSignup(preState => ({ ...preState, passwordError: false, passwordHelperText: "" }))
        }

        if (passwordRegex.test(userSignup.confirmPassword) === false) {
            setRegexSignup(preState => ({ ...preState, confirmPasswordError: true, confirmPasswordHelperText: "" }))
        }
        else if (passwordRegex.test(userSignup.confirmPassword) === true) {
            setRegexSignup(preState => ({ ...preState, confirmPasswordError: false, confirmPasswordHelperText: "" }))
        }

        if(regexSignup.firstNameError === false && regexSignup.lastNameError === false && regexSignup.emailError === false && regexSignup.passwordError === false && regexSignup.confirmPasswordError === false){
            SignUpApi(userSignup)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
        
    }
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
                                <TextField
                                  onChange={InputFirstName}
                                  error={regexSignup.firstNameError}
                                  helperText={regexSignup.firstNameHelperText}
                                className="inputfirstname" id="outlined-basic" label="First Name" variant="outlined" size="small" />

                            </div>
                            <div>
                                {/* <input className="inputlastname" placeholder="Last Name" /> */}
                                <TextField
                                onChange={InputLastName}
                                error={regexSignup.lastNameError}
                                helperText={regexSignup.lastNameHelperText}
                                className="inputlastname" id="outlined-basic" label="Last Name" variant="outlined" size="small" />

                            </div>
                        </div>

                        <div className="email">

                            {/* <input className="inputemail" placeholder="Username" /> */}
                            <TextField
                            onChange={InputEmail}
                            error={regexSignup.emailError}
                            helperText={regexSignup.emailHelperText}
                            className="inputemail" id="outlined-basic" label="Username" variant="outlined" size="small" />

                        </div>
                        <div className="message">
                            You can use letters, numbers & periods
                        </div>

                        <div className="middlemessge">
                            Use my current email address instead</div>

                        <div className="passwordbox">
                            <div>
                                {/* <input className="password" placeholder="Password" /> */}
                                <TextField
                                onChange={InputPassword}
                                error={regexSignup.passwordError}
                                helperText={regexSignup.passwordHelperText}
                                className="inputlastname" id="outlined-basic" label="Password" variant="outlined" size="small" />

                            </div>
                            <div>
                                {/* <input className="confirm" placeholder="Confirm" /> */}
                                <TextField
                                onChange={InputConfirmPassword}
                                error={regexSignup.confirmPasswordError}
                                helperText={regexSignup.confirmPasswordHelperText}
                                className="inputlastname" id="outlined-basic" label="Confirm" variant="outlined" size="small" />

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
                                <Button onClick={Submit} className="nextbutton1" variant="contained">Next</Button>
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