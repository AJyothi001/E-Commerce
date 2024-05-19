import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className='container'>
        <h1>Sign Up</h1>
        <div className='fields'>
          <input type="text" placeholder='Enter Name'></input>
          <input type="email" placeholder='Enter Email'></input>
          <input type="password" placeholder='Password'></input>
        </div>
        <button>Continue</button>
        <p className='already'> Already have an account?<span> Login Here</span></p>
        <div className='tac'>
          <input type="checkbox" name="" id=""></input>
          <p>By continuing,I agree to the terms of use & Privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
