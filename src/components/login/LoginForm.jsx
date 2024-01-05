import React from 'react';
import  '../assets/css/loginForm.css';
import { FaUserTie , FaLock} from "react-icons/fa";


const LoginForm =() => {
    return (
        <div className='wapper'> 
        <form action="POST"></form>
            <h1>LOGIN</h1>
            <div className="input-box">
                <input type="text" placeholder ="Username" required />
                <FaUserTie className='icon'/>
            </div>
            {/* ----Password--- */}
            <div className="input-box">
                <input type="Password" placeholder = "Password"  required/>
                <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
                <label> <input type="checkbox"/> Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className='login_button' >Login</button>

            <div className="register-link">
                <p>Don't have an account?  <a href="#">Register</a></p>
            </div>
            
        </div>
    );
};

export default LoginForm;