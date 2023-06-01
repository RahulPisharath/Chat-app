import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
     
return (
    <div className="bg-grey">
    <div className="d-flex h-full items-center justify-center">
        <div className="d-flex flex-col justify-center items-center">
        <div className="login_box">
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
                <div
                    className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"/>
                </div>
                
                <button
                    type="button"
                    className="btn btn-primary btn-block w-100 mb-3">
                        <Link to='/chat'>Click Me</Link>
                        </button>
                <div className="d-flex justify-space ft-12 mb-3">
                    <div>
                        <input
                            type="checkbox"/>
                        Remember ME
                    </div>
                    <div>
                        <Link to="/forgotpassword">Forgot your password</Link> 
                        
                    </div>
                </div>
                <div className="text-center ft-12">
                    
                Don't have an account? <Link to="/signup">Sign Up</Link> 
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

export default Login