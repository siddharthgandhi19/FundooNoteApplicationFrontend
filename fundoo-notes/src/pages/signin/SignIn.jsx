import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignIn.css';
import  {SignInApi} from '../../services/UserServices'
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function SignIn() {

    const [userDetail, setUserDetail] = useState({

        email: "",
        password: ""

    })

    let navigate=useNavigate()

    const takeEmail = (event) => {
        console.log(event.target.value)
        setUserDetail(preState => ({ ...preState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setUserDetail(preState => ({ ...preState, password: event.target.value }))

    }

    const [regexObj, setRegexObj] = useState({
        emailBorder: false,
        emailHelper: "",

        passwordBorder: false,
        passwordHelper: ""
    })


    const Submit = () => {
        console.log(userDetail)
        let emailTest = emailRegex.test(userDetail.email)
        let passwordTest = passwordRegex.test(userDetail.password)
        console.log(emailTest)
        console.log(passwordTest)

        if (emailTest === false) {
            setRegexObj(preState => ({ ...preState, emailBorder: true, emailHelper: 'Couldnt find your Fundoo Account' }))
        }
        else if (emailTest === true) {
            setRegexObj(preState => ({ ...preState, emailBorder: false, emailHelper: '' }))
        }
        if (passwordTest === false) {
            setRegexObj(preState => ({ ...preState, passwordBorder: true, passwordHelper: 'Wrong password. Try again or click Forgot password to reset it' }))
        }
        else if (passwordTest === true) {
            setRegexObj(preState => ({ ...preState, passwordBorder: false, passwordHelper: '' }))
        }
        if (emailTest === true && passwordTest === true) {
            SignInApi(userDetail)
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.data)
                    navigate('/dashboard')
                })
                .catch(error => {
                    console.log(error)
                })
                console.log('Login Successfull')
        }


    }


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
                        <TextField 
                        onChange={takeEmail}
                        error={regexObj.emailBorder}
                        helperText={regexObj.emailHelper}
                        className="signInInputEmail" id="outlined-basic" label="Enter your Email" variant="outlined" />
                    </div>
                    <div className="input" >
                        {/* <input className="InputPassword" placeholder="Password" /> */}
                        <TextField 
                        onChange={takePassword}
                        error={regexObj.passwordBorder}
                        helperText={regexObj.passwordHelper}
                        className="signInInputPassword" id="outlined-basic" label="Password" variant="outlined" 
                        type='password'
                        />
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
                    <a className="CreateAccountLink">Create Account</a>
                    {/* <button className="LoginButton">Next</button> */}
                    <Button onClick={Submit} className="LoginButton" variant="contained">Next</Button>
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