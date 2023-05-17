import Classes from './LinkToSignUp.module.css'
import React from 'react'
import BackgroundImage from '../../../assets/signup/Frame 3.png'
const signup = props => {
    return (
        <div className={Classes.LinkToSignUp}>
            <img src={BackgroundImage} className={Classes.BackgroundImage}/>
            <div className={Classes.Content}>
                <h1>Hello Friend !</h1>
                <p className={Classes.LinkToSignUpText}>Sign in if you have already registered
or Click on Sign Up to register</p>
                <a className={Classes.LinkToSignUpATag}>sign up</a>
            </div>
        </div>
    )
}
export default signup