import React, { useState } from "react";
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import 'bootstrap/dist/css/bootstrap.min.css';
import  login from '../Assets/login.jpg';
import register from '../Assets/register.jpg';
import '../LoginSystem/LogSys.css';
export default function(props){
    let [LoginSignup, setFormMode ] = useState("signin")
    const changeFormMode = () => {
        setFormMode(LoginSignup === "signin" ? "signup" : "signin")
    }
    if(LoginSignup === 'signin'){
        return (
            <div className="login-form-container">
                <img src={login} alt="image" className="img-fluid"/>
                <div className="col-md-6">
                <form className="login-form">
                    <div className="login-form-content">
                        <h3 className="title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email Address</label>
                            <input type="email" className="form-control mt-1" placeholder="domain@email.com" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1" placeholder="******" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">Password?</a>
                        </p>
                        <div className="text-center">
                            Not Registered Yet?{" "}
                            <span className="link-primary" onClick={changeFormMode}>
                                Sign Up
                            </span>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
    return (
        <div className="login-form-container">
            <img src={register} alt="register" className="img-fluid"/>
            <div className="col-md-6">
            <form className="login-form">
                <div className="login-form-content">
                    <h3 className="title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input type="text" className="form-control mt-1" placeholder="e.g Jane Doe"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input type="email" className="form-control mt-1" placeholder="domain@email.com" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" placeholder="******" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="text-center">
                        Already Registered?{" "}
                        <span className="link-primary" onClick={changeFormMode}>
                            Sign In
                        </span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}