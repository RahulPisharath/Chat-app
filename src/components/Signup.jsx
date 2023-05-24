import React from 'react'
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="bg-grey">
        <div className="d-flex h-full items-center justify-center">
        <div className="d-flex flex-col justify-center items-center">
        
        <div className="login_box">
    <div className='text-center'>
    <h3>Create your account</h3>
    <p>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</p>
    </div>
        <div className="header-form">
            <h4
                className="text-primary text-center">
            
            </h4>
            <div className="image"></div>
        </div>
        <div className="body-form">
            <form>
                <div
                    className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"/>
                </div>
                <button
                    type="button"
                    className="btn btn-primary btn-block w-100 mb-3">Continue</button>
                <div className="text-center ft-12">
                    
                Already have an account? <Link to="/login">Login</Link> 
                </div>
            </form>
            <div className="social">
                <a href="#">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-google"></i>
                    </a>
            </div>
        </div>
    </div>

        
        </div>
    </div>
</div>
  )
}

export default SignUp