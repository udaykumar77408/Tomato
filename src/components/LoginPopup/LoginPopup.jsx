import React, { useState } from 'react';
import "./LoginPopup.css";

const LoginPopup = ({showLogin,setShowLogin}) => {

    const[signLog,setSignLog] = useState("SignUp");

  return (
    <div>
      <div className="login-popup">
        <div className='login-partetion'>
            <h3 className='heading'>{signLog}</h3>
            <h3 className='cross-symbol' onClick={() => setShowLogin(false)}>X</h3>
            <form>
                {signLog==="SignUp"?
                <div>
                    <input type="text" placeholder='Enter Your Name...'/>
                    <input type="email" placeholder='Enter Your Email...'/>
                    <input type="password" placeholder='Create Password...'/>
                    <input type="submit" value="Create Account"/>
                </div>:
                <div>
                    <input type="text" placeholder='Enter Your Name...'/>
                    <input type="password" placeholder='Create Password...'/>
                    <input type="submit" value="Login Account"/>
                </div>
                }
            </form>
            <div>
                {
                    signLog==="SignUp"?
                    <div className='d-flex'>
                        <p>Already have an account?</p>
                        <p className='signlog-link mx-1' onClick={() => setSignLog("Login")}>Login here</p>
                    </div>:
                    <div className='d-flex'>
                        <p>Go Back to SignUp?</p>
                        <p className='signlog-link mx-1' onClick={() => setSignLog("SignUp")}>Sign here</p>
                    </div>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup;
