import React from 'react';
import  '../assets/css/loginForm.css';
import { FaUserTie , FaLock} from "react-icons/fa";


const LoginForm =() => {
    return (
        <div className="login-container">

        
        <div className='wapper'> 
        <form action="POST">
            <h1>LOGIN</h1>
            <div className="input-box">
                <input type="text" placeholder ="Username"
                id = "name" name = "username"
                autoComplete = "off"
                 required />
                <FaUserTie className='icon'/>
            </div>
            {/* ----Password--- */}
            <div className="input-box">
                <input type="Password"  id = "password" placeholder = "Password"  required/>
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
        </form>   
        </div>
        </div>
    );
};

export default LoginForm;