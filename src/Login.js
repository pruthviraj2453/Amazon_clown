import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login_page'>
        <div className='login'>
        <h3>Login</h3>
        <div className='login_Input'>
        <p className='login_Text'>Enter phone number and password</p>
        <input />
        <input placeholder='password'/>
        </div>
        <button className='login_Button'>Continue</button>
        <div>
        <small className='need_help'>need help?</small>
        </div>
    </div>
    </div>
  )
  
}

export default Login
